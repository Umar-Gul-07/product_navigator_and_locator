import React, { useEffect, useState } from "react";
import Product from "./include/Product";
import api from "../Utils/Axios";
import { Link } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [branches, setBranches] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products & categories
    useEffect(() => {
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

    // Fetch branches from backend
    useEffect(() => {
        api.get("/api/branches/")
            .then(response => {
                setBranches(response.data);
            })
            .catch(error => {
                console.error("Error fetching branches:", error);
                setError("Failed to load branches. Please try again.");
            });
    }, []);

    const filterProducts = (category, branch) => {
        let filtered = products;

        if (category) {
            filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
        }

        if (branch) {
            if (branch !== null) {
                filtered = filtered.filter(p => p.branch === branch || p.branch?.id === branch);
            }
                    }

        setFilteredProducts(filtered);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        filterProducts(category, selectedBranch);
    };

    const handleBranchClick = (branchName) => {
        setSelectedBranch(branchName);
        const selectedBranchObj = branches.find(b => b.name.toLowerCase() === branchName.toLowerCase());
        if (selectedBranchObj) {
            filterProducts(selectedCategory, selectedBranchObj.id);
        } else {
            filterProducts(selectedCategory, null);
        }
    };

    return (
        <div className="shop-grid-sidebar-area rts-section-gap">
            <div className="search-header-area-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="logo-search-category-wrapper d-flex justify-content-between align-items-start flex-wrap">

                                {/* Category Filter */}
                                <div className="category-search-wrapper mx-auto">
                                    <div className="category-btn category-hover-header">
                                        <img className="parent" src="assets/images/icons/bar-1.svg" alt="icons" />
                                        <span>Categories</span>
                                        <ul className="category-sub-menu metismenu">
                                            <li>
                                                <Link to="#" className="menu-item" onClick={() => handleCategoryClick(null)}>
                                                    <span>All Categories</span>
                                                </Link>
                                            </li>
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

                                {/* Branch Filter */}
                                <div className="category-search-wrapper mx-auto">
                                    <div className="category-btn category-hover-header">
                                        <img className="parent" src="assets/images/icons/bar-1.svg" alt="icons" />
                                        <span>Branches</span>
                                        <ul className="category-sub-menu metismenu">
                                            <li>
                                                <Link to="#" className="menu-item" onClick={() => handleBranchClick(null)}>
                                                    <span>All Branches</span>
                                                </Link>
                                            </li>
                                            {branches.map((branch, index) => (
                                                <li key={index}>
                                                    <Link to="#" className="menu-item" onClick={() => handleBranchClick(branch.name)}>
                                                        <span>{branch.name}</span>
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

            {/* Product List */}
            <div className="container">
                <div className="row g-0">
                    <div className="col-xl-12 col-lg-12 p-5">
                        <div className="tab-content" id="myTabContent">
                            <div className="product-area-wrapper-shopgrid-list mt--20 tab-pane fade show active">
                                <div className="row g-4">
                                    {loading && <p>Loading products...</p>}
                                    {error && <p className="text-danger">{error}</p>}
                                    {!loading && !error && filteredProducts.length === 0 && (
                                        <p className="text-danger mx-auto d-flex justify-content-center align-items-center">
                                            No products available.
                                        </p>
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
