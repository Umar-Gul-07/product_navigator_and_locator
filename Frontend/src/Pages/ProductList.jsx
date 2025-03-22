import React, { useEffect, useState } from "react";
import Product from "./include/Product";
import api from "../Utils/Axios";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch products from API
        api.get("/api/products/")  // Ensure this URL is correct
            .then((response) => {
                setProducts(response.data);  // Set API response data to state
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setError("Failed to load products. Please try again.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="shop-grid-sidebar-area rts-section-gap">
            <div className="container">
                <div className="row g-0">
                    <div className="col-xl-12 col-lg-12 p-5">
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="product-area-wrapper-shopgrid-list mt--20 tab-pane fade show active"
                                id="home-tab-pane"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                                tabIndex={0}
                            >
                                <div className="row g-4">
                                    {/* Show loading message */}
                                    {loading && <p>Loading products...</p>}

                                    {/* Show error message if API call fails */}
                                    {error && <p className="text-danger">{error}</p>}

                                    {/* Render products dynamically */}
                                    {!loading &&
                                        !error &&
                                        products.map((product) => (
                                            <Product key={product.id} item={product} />
                                        ))}
                                    
                                    {/* Show message if no products are found */}
                                    {!loading && !error && products.length === 0 && (
                                        <div >
                                        <p className="text-danger mx-auto d-flex justify-content-center align-items-center">No products available.</p>
                                        </div>

                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
