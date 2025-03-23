import React, { useContext } from "react";
import { Store } from "../Utils/Store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ShoppingList() {
    const { state, dispatch } = useContext(Store);
    const { Cart } = state;
    const navigate = useNavigate()

    const updateQuantity = (item, newQuantity) => {
        if (newQuantity < 1) return;

        dispatch({ type: "update-cart-quantity", payload: { id: item.id, quantity: newQuantity } });
    };


    const removeItem = (item) => {
        dispatch({ type: "remove-from-cart", payload: item });

        // Remove from localStorage
        setTimeout(() => {
            const updatedCart = JSON.parse(localStorage.getItem("CartItem")) || [];
            const newCart = updatedCart.filter(cartItem => cartItem.id !== item.id);
            localStorage.setItem("CartItem", JSON.stringify(newCart));
        }, 100);

        toast.success("Item removed from shopping list");
    };

    return (
        <div className="rts-cart-area rts-section-gap bg_light-1">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12 order-2 order-xl-1 order-lg-2 order-md-2 order-sm-2">
                        <div className="rts-cart-list-area">
                            <div className="single-cart-area-list head">
                                <div className="product-main"><p>Products</p></div>
                                <div className="price"><p>Price</p></div>
                                <div className="quantity"><p>Quantity</p></div>
                                <div className="subtotal"><p>SubTotal</p></div>
                                <div className="subtotal"><p>Location</p></div>
                                <div className="subtotal"><p>Action</p></div>
                            </div>

                            {Cart.length === 0 ? (
                                <p className="text-center text-danger m-5"><strong>Your shopping list is empty.</strong></p>
                            ) : (
                                Cart.map((item) => (
                                    <>
                                        <div key={item.id} className="single-cart-area-list main item-parent">
                                            <div className="product-main-cart">
                                                <div className="close section-activation" onClick={() => removeItem(item)}>
                                                    <i className="fa-regular fa-x" />
                                                </div>
                                                <div className="thumbnail">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                                <div className="information">
                                                    <h6 className="title">{item.name}</h6>
                                                    <span>SKU: {item.sku || `PROD-${item.id}`}</span>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <p>${item.price}</p>
                                            </div>
                                            <div className="quantity">
                                                <div className="quantity-edit d-flex align-items-center">
                                                    <input
                                                        type="text"
                                                        className="input form-control text-center fw-bold"
                                                        value={item.quantity}
                                                        onChange={(e) => updateQuantity(item, Number(e.target.value))}
                                                        style={{ maxWidth: "50px", minWidth: "45px", padding: "4px", fontSize: "14px" }}
                                                    />
                                                    <div className="button-wrapper-action">
                                                        <button className="button" onClick={() => updateQuantity(item, item.quantity - 1)}>
                                                            <i className="fa-regular fa-chevron-down" />
                                                        </button>
                                                        <button className="button plus" onClick={() => updateQuantity(item, item.quantity + 1)}>
                                                            <i className="fa-regular fa-chevron-up" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="subtotal">
                                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                            <div className="">
                                            <button className="rts-btn btn-primary"  onClick={() => navigate(`/store-map?category=${item.category}`)}>Navigate</button>
                                            </div>
                                            <div className="m-5">
                                            <button className="rts-btn btn-primary">Confirm</button>
                                            </div>

                                        </div>
                                    </>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingList;
