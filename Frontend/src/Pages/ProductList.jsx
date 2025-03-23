import React, { useEffect, useState } from "react";
import Product from "./include/Product";
import api from "../Utils/Axios";
import { Link } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch Products
        const fetchProducts = async () => {
            try {
                const response = await api.get("/api/products/");
                setProducts(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Failed to load products. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        // Fetch Categories
        const fetchCategories = async () => {
            try {
                const response = await api.get("/api/categories/");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
                setError("Failed to load categories.");
            }
        };

        fetchProducts();
        fetchCategories();
    }, []);

    // Function to filter products based on selected category
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category) {
            setFilteredProducts(
                products.filter((product) =>
                    product.category.toLowerCase() === category.toLowerCase()
                )
            );
        } else {
            setFilteredProducts(products);
        }
    };

    return (
        <div className="shop-grid-sidebar-area rts-section-gap">
            <div className="search-header-area-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="logo-search-category-wrapper">
                                <div className="category-search-wrapper mx-auto">
                                    <div className="category-btn category-hover-header">
                                        <img className="parent" src="assets/images/icons/bar-1.svg" alt="icons" />
                                        <span>Categories</span>
                                        <ul className="category-sub-menu metismenu" id="category-active-four">
                                            {/* Show "All Categories" option */}
                                            <li>
                                                <Link to="#" className="menu-item" onClick={() => handleCategoryClick(null)}>
                                                    <span>All Categories</span>
                                                </Link>
                                            </li>

                                            {/* Dynamically render categories */}
                                            {categories.map((category, index) => (
                                                <li key={index}>
                                                    <Link to="#" className="menu-item" onClick={() => handleCategoryClick(category.name)}>
                                                        <span>{category.name}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-0">
                    <div className="col-xl-12 col-lg-12 p-5">
                        <div className="tab-content" id="myTabContent">
                            <div className="product-area-wrapper-shopgrid-list mt--20 tab-pane fade show active">
                                <div className="row g-4">
                                    {loading && <p>Loading products...</p>}
                                    {error && <p className="text-danger">{error}</p>}
                                    {!loading && !error && filteredProducts.length === 0 && (
                                        <p className="text-danger mx-auto d-flex justify-content-center align-items-center">No products available.</p>
                                    )}
                                    {!loading && !error && filteredProducts.map((product) => (
                                        <Product key={product.id} item={product} />
                                    ))}
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
