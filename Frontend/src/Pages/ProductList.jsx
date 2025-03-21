import React from 'react'

function ProductList() {
    return (
        <>
            <div
                className="shop-grid-sidebar-area rts-section-gap"
                style={{ transform: "none" }}
            >
                <div className="container" style={{ transform: "none" }}>
                    <div className="row g-0" style={{ transform: "none" }}>
                  
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
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/01.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Best Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/02.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            None Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/03.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            More Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/04.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Tech Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/05.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Food Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/06.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Vagetable Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/03.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Juice Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/05.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Coco Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/02.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Morp Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/06.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Visan Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/01.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Porsta Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/02.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Chicken Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/03.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Manus Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/04.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Sajid Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                {/* iamge and sction area start */}
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>
                                                                25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark" />
                                                        </div>
                                                        <img src="assets/images/grocery/05.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div
                                                            className="single-action openuptip message-show-action"
                                                            data-flow="up"
                                                            title="Add To Wishlist"
                                                        >
                                                            <i className="fa-light fa-heart" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip"
                                                            data-flow="up"
                                                            title="Compare"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <i className="fa-solid fa-arrows-retweet" />
                                                        </div>
                                                        <div
                                                            className="single-action openuptip cta-quickview product-details-popup-btn"
                                                            data-flow="up"
                                                            title="Quick View"
                                                        >
                                                            <i className="fa-regular fa-eye" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* iamge and sction area start */}
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title">
                                                            Kolid Cerelac Mixed Fruits &amp; Wheat with Milk
                                                        </h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
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
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="product-area-wrapper-shopgrid-list with-list mt--20 tab-pane fade"
                                    id="profile-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                    tabIndex={0}
                                >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-shopping-card-one discount-offer">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <div className="badge">
                                                        <span>
                                                            25% <br />
                                                            Off
                                                        </span>
                                                        <i className="fa-solid fa-bookmark" />
                                                    </div>
                                                    <img src="assets/images/grocery/03.jpg" alt="grocery" />
                                                </a>
                                                <div className="body-content">
                                                    <div className="title-area-left">
                                                        <a href="shop-details.html">
                                                            <h4 className="title">
                                                                Nestle Cerelac Mixed Fruits &amp; Wheat with Milk
                                                            </h4>
                                                        </a>
                                                        <span className="availability">500g Pack</span>
                                                        <div className="price-area">
                                                            <span className="current">$36.00</span>
                                                            <div className="previous">$36.00</div>
                                                        </div>
                                                        <div className="cart-counter-action">
                                                            <div className="quantity-edit">
                                                                <input
                                                                    type="text"
                                                                    className="input"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="button-wrapper-action">
                                                                    <button className="button">
                                                                        <i className="fa-regular fa-chevron-down" />
                                                                    </button>
                                                                    <button className="button plus">
                                                                        +<i className="fa-regular fa-chevron-up" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Add To Cart</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="natural-value">
                                                        <h6 className="title">Nutritional Values</h6>
                                                        <div className="single">
                                                            <span>Energy(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Protein(g):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>magnetiam(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Calory(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Vitamine(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-shopping-card-one discount-offer">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <div className="badge">
                                                        <span>
                                                            25% <br />
                                                            Off
                                                        </span>
                                                        <i className="fa-solid fa-bookmark" />
                                                    </div>
                                                    <img src="assets/images/grocery/04.jpg" alt="grocery" />
                                                </a>
                                                <div className="body-content">
                                                    <div className="title-area-left">
                                                        <a href="shop-details.html">
                                                            <h4 className="title">
                                                                Varts Cerelac Mixed Fruits &amp; Wheat with Milk
                                                            </h4>
                                                        </a>
                                                        <span className="availability">500g Pack</span>
                                                        <div className="price-area">
                                                            <span className="current">$36.00</span>
                                                            <div className="previous">$36.00</div>
                                                        </div>
                                                        <div className="cart-counter-action">
                                                            <div className="quantity-edit">
                                                                <input
                                                                    type="text"
                                                                    className="input"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="button-wrapper-action">
                                                                    <button className="button">
                                                                        <i className="fa-regular fa-chevron-down" />
                                                                    </button>
                                                                    <button className="button plus">
                                                                        +<i className="fa-regular fa-chevron-up" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Add To Cart</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="natural-value">
                                                        <h6 className="title">Nutritional Values</h6>
                                                        <div className="single">
                                                            <span>Energy(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Protein(g):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>magnetiam(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Calory(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Vitamine(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-shopping-card-one discount-offer">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <div className="badge">
                                                        <span>
                                                            25% <br />
                                                            Off
                                                        </span>
                                                        <i className="fa-solid fa-bookmark" />
                                                    </div>
                                                    <img src="assets/images/grocery/05.jpg" alt="grocery" />
                                                </a>
                                                <div className="body-content">
                                                    <div className="title-area-left">
                                                        <a href="shop-details.html">
                                                            <h4 className="title">
                                                                Nestle Cerelac Mixed Fruits &amp; Wheat with Milk
                                                            </h4>
                                                        </a>
                                                        <span className="availability">500g Pack</span>
                                                        <div className="price-area">
                                                            <span className="current">$36.00</span>
                                                            <div className="previous">$36.00</div>
                                                        </div>
                                                        <div className="cart-counter-action">
                                                            <div className="quantity-edit">
                                                                <input
                                                                    type="text"
                                                                    className="input"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="button-wrapper-action">
                                                                    <button className="button">
                                                                        <i className="fa-regular fa-chevron-down" />
                                                                    </button>
                                                                    <button className="button plus">
                                                                        +<i className="fa-regular fa-chevron-up" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Add To Cart</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="natural-value">
                                                        <h6 className="title">Nutritional Values</h6>
                                                        <div className="single">
                                                            <span>Energy(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Protein(g):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>magnetiam(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Calory(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Vitamine(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-shopping-card-one discount-offer">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <div className="badge">
                                                        <span>
                                                            25% <br />
                                                            Off
                                                        </span>
                                                        <i className="fa-solid fa-bookmark" />
                                                    </div>
                                                    <img src="assets/images/grocery/06.jpg" alt="grocery" />
                                                </a>
                                                <div className="body-content">
                                                    <div className="title-area-left">
                                                        <a href="shop-details.html">
                                                            <h4 className="title">
                                                                Nestle Cerelac Mixed Fruits &amp; Wheat with Milk
                                                            </h4>
                                                        </a>
                                                        <span className="availability">500g Pack</span>
                                                        <div className="price-area">
                                                            <span className="current">$36.00</span>
                                                            <div className="previous">$36.00</div>
                                                        </div>
                                                        <div className="cart-counter-action">
                                                            <div className="quantity-edit">
                                                                <input
                                                                    type="text"
                                                                    className="input"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="button-wrapper-action">
                                                                    <button className="button">
                                                                        <i className="fa-regular fa-chevron-down" />
                                                                    </button>
                                                                    <button className="button plus">
                                                                        +<i className="fa-regular fa-chevron-up" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Add To Cart</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="natural-value">
                                                        <h6 className="title">Nutritional Values</h6>
                                                        <div className="single">
                                                            <span>Energy(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Protein(g):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>magnetiam(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Calory(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Vitamine(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-shopping-card-one discount-offer">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <div className="badge">
                                                        <span>
                                                            25% <br />
                                                            Off
                                                        </span>
                                                        <i className="fa-solid fa-bookmark" />
                                                    </div>
                                                    <img src="assets/images/grocery/01.jpg" alt="grocery" />
                                                </a>
                                                <div className="body-content">
                                                    <div className="title-area-left">
                                                        <a href="shop-details.html">
                                                            <h4 className="title">
                                                                Nestle Cerelac Mixed Fruits &amp; Wheat with Milk
                                                            </h4>
                                                        </a>
                                                        <span className="availability">500g Pack</span>
                                                        <div className="price-area">
                                                            <span className="current">$36.00</span>
                                                            <div className="previous">$36.00</div>
                                                        </div>
                                                        <div className="cart-counter-action">
                                                            <div className="quantity-edit">
                                                                <input
                                                                    type="text"
                                                                    className="input"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="button-wrapper-action">
                                                                    <button className="button">
                                                                        <i className="fa-regular fa-chevron-down" />
                                                                    </button>
                                                                    <button className="button plus">
                                                                        +<i className="fa-regular fa-chevron-up" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Add To Cart</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="natural-value">
                                                        <h6 className="title">Nutritional Values</h6>
                                                        <div className="single">
                                                            <span>Energy(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Protein(g):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>magnetiam(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Calory(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Vitamine(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-shopping-card-one discount-offer">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <div className="badge">
                                                        <span>
                                                            25% <br />
                                                            Off
                                                        </span>
                                                        <i className="fa-solid fa-bookmark" />
                                                    </div>
                                                    <img src="assets/images/grocery/03.jpg" alt="grocery" />
                                                </a>
                                                <div className="body-content">
                                                    <div className="title-area-left">
                                                        <a href="shop-details.html">
                                                            <h4 className="title">
                                                                Nestle Cerelac Mixed Fruits &amp; Wheat with Milk
                                                            </h4>
                                                        </a>
                                                        <span className="availability">500g Pack</span>
                                                        <div className="price-area">
                                                            <span className="current">$36.00</span>
                                                            <div className="previous">$36.00</div>
                                                        </div>
                                                        <div className="cart-counter-action">
                                                            <div className="quantity-edit">
                                                                <input
                                                                    type="text"
                                                                    className="input"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="button-wrapper-action">
                                                                    <button className="button">
                                                                        <i className="fa-regular fa-chevron-down" />
                                                                    </button>
                                                                    <button className="button plus">
                                                                        +<i className="fa-regular fa-chevron-up" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Add To Cart</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="natural-value">
                                                        <h6 className="title">Nutritional Values</h6>
                                                        <div className="single">
                                                            <span>Energy(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Protein(g):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>magnetiam(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Calory(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Vitamine(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-shopping-card-one discount-offer">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <div className="badge">
                                                        <span>
                                                            25% <br />
                                                            Off
                                                        </span>
                                                        <i className="fa-solid fa-bookmark" />
                                                    </div>
                                                    <img src="assets/images/grocery/04.jpg" alt="grocery" />
                                                </a>
                                                <div className="body-content">
                                                    <div className="title-area-left">
                                                        <a href="shop-details.html">
                                                            <h4 className="title">
                                                                Nestle Cerelac Mixed Fruits &amp; Wheat with Milk
                                                            </h4>
                                                        </a>
                                                        <span className="availability">500g Pack</span>
                                                        <div className="price-area">
                                                            <span className="current">$36.00</span>
                                                            <div className="previous">$36.00</div>
                                                        </div>
                                                        <div className="cart-counter-action">
                                                            <div className="quantity-edit">
                                                                <input
                                                                    type="text"
                                                                    className="input"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="button-wrapper-action">
                                                                    <button className="button">
                                                                        <i className="fa-regular fa-chevron-down" />
                                                                    </button>
                                                                    <button className="button plus">
                                                                        +<i className="fa-regular fa-chevron-up" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Add To Cart</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="natural-value">
                                                        <h6 className="title">Nutritional Values</h6>
                                                        <div className="single">
                                                            <span>Energy(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Protein(g):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>magnetiam(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Calory(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Vitamine(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-shopping-card-one discount-offer">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <div className="badge">
                                                        <span>
                                                            25% <br />
                                                            Off
                                                        </span>
                                                        <i className="fa-solid fa-bookmark" />
                                                    </div>
                                                    <img src="assets/images/grocery/05.jpg" alt="grocery" />
                                                </a>
                                                <div className="body-content">
                                                    <div className="title-area-left">
                                                        <a href="shop-details.html">
                                                            <h4 className="title">
                                                                Nestle Cerelac Mixed Fruits &amp; Wheat with Milk
                                                            </h4>
                                                        </a>
                                                        <span className="availability">500g Pack</span>
                                                        <div className="price-area">
                                                            <span className="current">$36.00</span>
                                                            <div className="previous">$36.00</div>
                                                        </div>
                                                        <div className="cart-counter-action">
                                                            <div className="quantity-edit">
                                                                <input
                                                                    type="text"
                                                                    className="input"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="button-wrapper-action">
                                                                    <button className="button">
                                                                        <i className="fa-regular fa-chevron-down" />
                                                                    </button>
                                                                    <button className="button plus">
                                                                        +<i className="fa-regular fa-chevron-up" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Add To Cart</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="natural-value">
                                                        <h6 className="title">Nutritional Values</h6>
                                                        <div className="single">
                                                            <span>Energy(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Protein(g):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>magnetiam(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Calory(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Vitamine(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-shopping-card-one discount-offer">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <div className="badge">
                                                        <span>
                                                            25% <br />
                                                            Off
                                                        </span>
                                                        <i className="fa-solid fa-bookmark" />
                                                    </div>
                                                    <img src="assets/images/grocery/06.jpg" alt="grocery" />
                                                </a>
                                                <div className="body-content">
                                                    <div className="title-area-left">
                                                        <a href="shop-details.html">
                                                            <h4 className="title">
                                                                Nestle Cerelac Mixed Fruits &amp; Wheat with Milk
                                                            </h4>
                                                        </a>
                                                        <span className="availability">500g Pack</span>
                                                        <div className="price-area">
                                                            <span className="current">$36.00</span>
                                                            <div className="previous">$36.00</div>
                                                        </div>
                                                        <div className="cart-counter-action">
                                                            <div className="quantity-edit">
                                                                <input
                                                                    type="text"
                                                                    className="input"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="button-wrapper-action">
                                                                    <button className="button">
                                                                        <i className="fa-regular fa-chevron-down" />
                                                                    </button>
                                                                    <button className="button plus">
                                                                        +<i className="fa-regular fa-chevron-up" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Add To Cart</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="natural-value">
                                                        <h6 className="title">Nutritional Values</h6>
                                                        <div className="single">
                                                            <span>Energy(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Protein(g):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>magnetiam(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Calory(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Vitamine(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-shopping-card-one discount-offer">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <div className="badge">
                                                        <span>
                                                            25% <br />
                                                            Off
                                                        </span>
                                                        <i className="fa-solid fa-bookmark" />
                                                    </div>
                                                    <img src="assets/images/grocery/01.jpg" alt="grocery" />
                                                </a>
                                                <div className="body-content">
                                                    <div className="title-area-left">
                                                        <a href="shop-details.html">
                                                            <h4 className="title">
                                                                Nestle Cerelac Mixed Fruits &amp; Wheat with Milk
                                                            </h4>
                                                        </a>
                                                        <span className="availability">500g Pack</span>
                                                        <div className="price-area">
                                                            <span className="current">$36.00</span>
                                                            <div className="previous">$36.00</div>
                                                        </div>
                                                        <div className="cart-counter-action">
                                                            <div className="quantity-edit">
                                                                <input
                                                                    type="text"
                                                                    className="input"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="button-wrapper-action">
                                                                    <button className="button">
                                                                        <i className="fa-regular fa-chevron-down" />
                                                                    </button>
                                                                    <button className="button plus">
                                                                        +<i className="fa-regular fa-chevron-up" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Add To Cart</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-regular fa-cart-shopping" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="natural-value">
                                                        <h6 className="title">Nutritional Values</h6>
                                                        <div className="single">
                                                            <span>Energy(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Protein(g):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>magnetiam(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Calory(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                        <div className="single">
                                                            <span>Vitamine(kcal):</span>
                                                            <span>211</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default ProductList
