import React, { useState, useContext } from "react";
import { Store } from "../../Utils/Store";
import { toast } from "react-toastify";
import api from "../../Utils/Axios";
import { useNavigate } from "react-router-dom";

function Product({ item }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
    const { state, dispatch } = useContext(Store);
    const { Cart } = state;
    const navigate = useNavigate()

    const handleQuickView = () => {
        setSelectedProduct(item);
        setIsQuickViewOpen(true);
    };

    const closeQuickView = () => {
        setIsQuickViewOpen(false);
        setSelectedProduct(null);
    };

    const addToCart = async () => {
        try {
            // const response = await api.get(`/check-stock/?product_id=${item.id}`);
            const { in_stock, stock } =[1,1];

            // if (!in_stock) {
            //     toast.error("Product is out of stock");
            //     return;
            // }

            const currentCartItem = Cart.find((cartItem) => cartItem.id === item.id);
            const currentQuantity = currentCartItem ? currentCartItem.quantity : 0;

            if (currentQuantity + 1 > stock) {
                toast.error("Product out of stock");
                return;
            }

            toast.success("Product added to cart!");
            dispatch({ type: "add-to-cart", payload: item });
            localStorage.setItem("CartItem", JSON.stringify([...Cart, item]));
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                <div className="image-and-action-area-wrapper">
                    <a href={`/shop-details/${item.id}`} className="thumbnail-preview">
                        <img src={`${item.image}`} alt={item.name} className="product-image" />
                    </a>
                    <div className="action-share-option mb-3">
                        <div
                            className="single-action openuptip cta-quickview product-details-popup-btn"
                            data-flow="up"
                            title="Quick View"
                            onClick={handleQuickView}
                        >
                            <i className="fa-regular fa-eye" />
                        </div>
                    </div>
                </div>

                <div className="body-content">
                    <a href={`/shop-details/${item.id}`}>
                        <h4 className="title">{item.name}</h4>
                    </a>
                    <span className="availability">
                        {item.stock > 0 ? (
                            <span className="text-success" style={{ fontFamily: "bolder" }}>In Stock</span>
                        ) : (
                            <span className="text-danger" style={{ fontFamily: "bolder" }}>Out of Stock</span>
                        )}
                    </span>
                    <div className="price-area">
                    {item.discount_active ? (
                        <div className="bd-product__price">
                            <span className="bd-product__old-price">
                                <del className="text-danger">RS {item.price}</del>
                            </span>
                            <span className="bd-product__new-price">
                                RS {item.discounted_price}
                            </span>
                        </div>
                    ) : (
                        <div className="bd-product__price">
                            <span className="bd-product__new-price text-success">
                                <strong>Rs {item.price}</strong>
                            </span>
                        </div>
                    )}
                    </div>
                    <div className="cart-counter-action">
                        <button className="rts-btn btn-primary radious-sm with-icon" onClick={addToCart}>
                            <div className="btn-text">Add To Shopping List</div>
                        
                            <div className="arrow-icon">
                                <i className="fa-regular fa-cart-shopping" />
                            </div>
                        </button>
                        <button className="rts-btn btn-primary"  onClick={() => navigate(`/store-map?category=${item.category}`)}>Navigate</button>

                    </div>
                </div>
            </div>

            {/* Quick View Modal */}
            {isQuickViewOpen && selectedProduct && (
                <div className="quickview-modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={closeQuickView}>
                            &times;
                        </span>
                        <h2>{selectedProduct.name}</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="quickview-image" />
                        <p>
                            <strong>Category:</strong> {selectedProduct.category}
                        </p>
                        <p>
                        {item.discount_active ? (
                        <div className="bd-product__price">
                            <span className="bd-product__old-price">
                                <del className="text-danger">RS {item.price}</del>
                            </span>
                            <span className="bd-product__new-price">
                                RS {item.discounted_price}
                            </span>
                        </div>
                    ) : (
                        <div className="bd-product__price">
                            <span className="bd-product__new-price text-success">
                                <strong>Rs {item.price}</strong>
                            </span>
                        </div>
                    )}
                        </p>
                        <button className="rts-btn btn-primary" onClick={addToCart}>Add to Cart</button>
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
                    height: 200px; /* Fixed height */
                    object-fit: cover; /* Ensures the image is contained within the box without distortion */
                    border-radius: 10px;
                }
                .quickview-image {
                    width: 100%;
                    height: auto;
                    max-height: 250px;
                    object-fit: contain;
                }
            `}</style>
        </div>
    );
}

export default Product;
