import React, { useState, useEffect } from "react";
import axios from "axios";

function Product(item) {
    const [products, setProducts] = useState([item]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const handleQuickView = (product) => {
        setSelectedProduct(product);
        setIsQuickViewOpen(true);
    };

    const closeQuickView = () => {
        setIsQuickViewOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="row">
            {/* Show error message if API fails */}
            {error && <p className="error-message">{error}</p>}

            {/* Show loading message while fetching data */}
            {loading ? (
                <p>Loading products...</p>
            ) : (
                products.map((product) => (
                    <div key={product.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="single-shopping-card-one">
                            {/* Image and Action Area Start */}
                            <div className="image-and-action-area-wrapper">
                                <a href={`/shop-details/${product.id}`} className="thumbnail-preview">
                                    {product.discounts.length > 0 && (
                                        <div className="badge">
                                            <span>
                                                {product.discounts[0].discount_value}% <br />
                                                Off
                                            </span>
                                            <i className="fa-solid fa-bookmark" />
                                        </div>
                                    )}
                                    <img
                                        src={`http://localhost:8000${product.image}`} // Fix: Correct image path
                                        alt={product.name}
                                        className="product-image"
                                    />
                                </a>
                                <div className="action-share-option">
                                    <div
                                        className="single-action openuptip cta-quickview product-details-popup-btn"
                                        data-flow="up"
                                        title="Quick View"
                                        onClick={() => handleQuickView(product)}
                                    >
                                        <i className="fa-regular fa-eye" />
                                    </div>
                                </div>
                            </div>
                            {/* Image and Action Area End */}
                            <div className="body-content">
                                <a href={`/shop-details/${product.id}`}>
                                    <h4 className="title">{product.name}</h4>
                                </a>
                                <span className="availability">
                                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                                </span>
                                <div className="price-area">
                                    <span className="current">${product.price}</span>
                                </div>
                                <div className="cart-counter-action">
                                    <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                        <div className="btn-text">Add To Shopping List</div>
                                        <div className="arrow-icon">
                                            <i className="fa-regular fa-cart-shopping" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}

            {/* Quick View Modal */}
            {isQuickViewOpen && selectedProduct && (
                <div className="quickview-modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={closeQuickView}>
                            &times;
                        </span>
                        <h2>{selectedProduct.name}</h2>
                        <img
                            src={`http://localhost:8000${selectedProduct.image}`}
                            alt={selectedProduct.name}
                            className="quickview-image"
                        />
                        <p>
                            <strong>Category:</strong> {selectedProduct.category.name}
                        </p>
                        <p>
                            <strong>Price:</strong> ${selectedProduct.price}
                        </p>
                        <button className="rts-btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            )}

            {/* Quick View Modal Styles */}
            <style jsx>{`
                .quickview-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .modal-content {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    width: 400px;
                    text-align: center;
                    position: relative;
                }
                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    font-size: 24px;
                    cursor: pointer;
                }
                .product-image {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                }
                .quickview-image {
                    width: 100%;
                    max-height: 250px;
                    object-fit: contain;
                }
                .error-message {
                    color: red;
                    font-weight: bold;
                    text-align: center;
                    margin-top: 20px;
                }
            `}</style>
        </div>
    );
}

export default Product;
