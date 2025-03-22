import React from 'react'

function ShoppingList() {
    return (
        <>
            <div className="rts-cart-area rts-section-gap bg_light-1">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12 order-2 order-xl-1 order-lg-2 order-md-2 order-sm-2">
                            
                            <div className="rts-cart-list-area">
                                <div className="single-cart-area-list head">
                                    <div className="product-main">
                                        <p>Products</p>
                                    </div>
                                    <div className="price">
                                        <p>Price</p>
                                    </div>
                                    <div className="quantity">
                                        <p>Quantity</p>
                                    </div>
                                    <div className="subtotal">
                                        <p>SubTotal</p>
                                    </div>
                                </div>
                                <div className="single-cart-area-list main  item-parent">
                                    <div className="product-main-cart">
                                        <div className="close section-activation">
                                            <i className="fa-regular fa-x" />
                                        </div>
                                        <div className="thumbnail">
                                            <img src="assets/images/shop/02.png" alt="shop" />
                                        </div>
                                        <div className="information">
                                            <h6 className="title">
                                                SunChips Minis, Garden Salsa Flavored Canister, Multigrain
                                                Chips
                                            </h6>
                                            <span>SKU:BG-1001</span>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <p>$550.00</p>
                                    </div>
                                    <div className="quantity">
                                        <div className="quantity-edit">
                                            <input type="text" className="input" defaultValue={1} />
                                            <div className="button-wrapper-action">
                                                <button className="button">
                                                    <i className="fa-regular fa-chevron-down" />
                                                </button>
                                                <button className="button plus">
                                                    +<i className="fa-regular fa-chevron-up" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="subtotal">
                                        <p>$550.00</p>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShoppingList
