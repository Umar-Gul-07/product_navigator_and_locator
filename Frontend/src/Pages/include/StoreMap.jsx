import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const StoreMap = () => {
    const [searchParams] = useSearchParams();
    const categoryName = searchParams.get("category");

    const [userLocation, setUserLocation] = useState(null);
    const [productLocation, setProductLocation] = useState(null);
    const mapRef = useRef(null);
    const userMarkerRef = useRef(null);
    const pathRef = useRef(null);

    // Store boundaries
    const storeBounds = [
        [0, 0],       
        [1000, 1000], 
    ];

    // 📌 Category images (MUST match category names exactly)
    const categoryImages = {
        "Fresh": "/fresh.jpg",
        "Dairy": "/dairy.jpg",
        "Meat": "/meat.jpg",
        "Bakery": "/bakery.jpg",
        "Frozen": "/frozen.jpg",
        "Pantry": "/pantry.jpg",
        "Snacks": "/snacks.jpg",
        "Canned": "/canned.jpg",
        "Personalcare": "/personalcare.jpg",
        "Spices": "/spices.jpg",
    };

    // ✅ Debugging: Log categoryName
    console.log("Category from URL:", categoryName);

    // ✅ Fix: Trim whitespace and ensure exact match
    const trimmedCategory = categoryName ? categoryName.trim() : "";
    const storeImage = categoryImages[trimmedCategory] || "/Grocery.jpg";

    console.log("Using store image:", storeImage);

    // 🌍 Track user location
    useEffect(() => {
        if (navigator.geolocation) {
            const watchId = navigator.geolocation.watchPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error getting user location:", error);
                },
                { enableHighAccuracy: true }
            );

            return () => navigator.geolocation.clearWatch(watchId);
        }
    }, []);

    // Fetch product location from backend
    useEffect(() => {
        if (categoryName) {
            axios.get(`http://127.0.0.1:8000/api/category-location/${categoryName}/`)
            .then(response => {
                    setProductLocation(response.data);
                })
                .catch(error => {
                    console.error("Error fetching product location:", error);
                });
        }
    }, [categoryName]);

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map("store-map", {
                crs: L.CRS.Simple,
                minZoom: -2,
                maxZoom: 1,
            }).fitBounds(storeBounds);

            // 🏪 Set correct store section image
            console.log("Adding image overlay:", process.env.PUBLIC_URL + storeImage);
            L.imageOverlay(process.env.PUBLIC_URL + storeImage, storeBounds).addTo(mapRef.current);
        }

        if (!userLocation) return;

        // 🛠 Convert real GPS coordinates to store map coordinates
        const storeX = (userLocation.lng % 1000) + 200;
        const storeY = (userLocation.lat % 1000) + 200;

        if (userMarkerRef.current) {
            mapRef.current.removeLayer(userMarkerRef.current);
        }

        // 📍 Add user location marker
        userMarkerRef.current = L.marker([storeY, storeX], {
            icon: L.icon({
                iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
                iconSize: [30, 30],
            }),
        }).addTo(mapRef.current)
          .bindPopup("📍 You are here")
          .openPopup();

        if (productLocation) {
            // 🛠 Convert product GPS coordinates to store map coordinates
            const productX = (productLocation.lng % 1000) + 200;
            const productY = (productLocation.lat % 1000) + 200;

            if (pathRef.current) {
                mapRef.current.removeLayer(pathRef.current);
            }

            // ✅ Draw a path from user to product
            pathRef.current = L.polyline(
                [
                    [storeY, storeX], 
                    [productY, productX], 
                ],
                { color: "blue", weight: 4, dashArray: "5, 10" }
            ).addTo(mapRef.current);

            setTimeout(() => {
                mapRef.current.flyTo([productY, productX], 0, { duration: 2 });
            }, 1000);
        }
    }, [userLocation, productLocation, categoryName]);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Find {categoryName}</h2>
            <div id="store-map" style={{ width: "80%", height: "500px", margin: "auto" }}></div>
        </div>
    );
};

export default StoreMap;
