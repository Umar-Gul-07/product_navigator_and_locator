
function Header() {
    return (
        <>

            <div
                className="header-cate-model main-gambo-model modal fade"
                id="category_model"
                tabIndex={-1}
                role="dialog"
                aria-modal="false"
            >
                <div className="modal-dialog category-area" role="document">
                    <div className="category-area-inner">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close btn-close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="uil uil-multiply" />
                            </button>
                        </div>
                        <div className="category-model-content modal-content">
                            <div className="cate-header">
                                <h4>Select Category</h4>
                            </div>
                            <ul className="category-by-cat">
                                <li>
                                    <a href="#" className="single-cat-item">
                                        <div className="icon">
                                            <img src="images/category/icon-1.svg" alt="" />
                                        </div>
                                        <div className="text"> Fruits and Vegetables </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="single-cat-item">
                                        <div className="icon">
                                            <img src="images/category/icon-2.svg" alt="" />
                                        </div>
                                        <div className="text"> Grocery &amp; Staples </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="single-cat-item">
                                        <div className="icon">
                                            <img src="images/category/icon-3.svg" alt="" />
                                        </div>
                                        <div className="text"> Dairy &amp; Eggs </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="single-cat-item">
                                        <div className="icon">
                                            <img src="images/category/icon-4.svg" alt="" />
                                        </div>
                                        <div className="text"> Beverages </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="single-cat-item">
                                        <div className="icon">
                                            <img src="images/category/icon-5.svg" alt="" />
                                        </div>
                                        <div className="text"> Snacks </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="single-cat-item">
                                        <div className="icon">
                                            <img src="images/category/icon-6.svg" alt="" />
                                        </div>
                                        <div className="text"> Home Care </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="single-cat-item">
                                        <div className="icon">
                                            <img src="images/category/icon-7.svg" alt="" />
                                        </div>
                                        <div className="text"> Noodles &amp; Sauces </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="single-cat-item">
                                        <div className="icon">
                                            <img src="images/category/icon-8.svg" alt="" />
                                        </div>
                                        <div className="text"> Personal Care </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="single-cat-item">
                                        <div className="icon">
                                            <img src="images/category/icon-9.svg" alt="" />
                                        </div>
                                        <div className="text"> Pet Care </div>
                                    </a>
                                </li>
                            </ul>
                            <a href="#" className="morecate-btn">
                                <i className="uil uil-apps" />
                                More Categories
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header bs-canvas-header side-cart-header p-3">
                    <div className="d-inline-block main-cart-title" id="offcanvasRightLabel">
                        My Cart <span>(2 Items)</span>
                    </div>
                    <button
                        type="button"
                        className="close-btn"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <i className="uil uil-multiply" />
                    </button>
                </div>
                <div className="offcanvas-body p-0">
                    <div className="cart-top-total p-4">
                        <div className="cart-total-dil">
                            <h4>Gambo Super Market</h4>
                            <span>$34</span>
                        </div>
                        <div className="cart-total-dil pt-2">
                            <h4>Delivery Charges</h4>
                            <span>$1</span>
                        </div>
                    </div>
                    <div className="side-cart-items">
                        <div className="cart-item">
                            <div className="cart-product-img">
                                <img src="images/product/img-1.jpg" alt="" />
                                <div className="offer-badge">6% OFF</div>
                            </div>
                            <div className="cart-text">
                                <h4>Product Title Here</h4>
                                <div className="cart-radio">
                                    <ul className="kggrm-now">
                                        <li>
                                            <input type="radio" id="a1" name="cart1" />
                                            <label htmlFor="a1">0.50</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="a2" name="cart1" />
                                            <label htmlFor="a2">1kg</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="a3" name="cart1" />
                                            <label htmlFor="a3">2kg</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="a4" name="cart1" />
                                            <label htmlFor="a4">3kg</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="qty-group">
                                    <div className="quantity buttons_added">
                                        <input
                                            type="button"
                                            defaultValue="-"
                                            className="minus minus-btn"
                                        />
                                        <input
                                            type="number"
                                            step={1}
                                            name="quantity"
                                            defaultValue={1}
                                            className="input-text qty text"
                                        />
                                        <input type="button" defaultValue="+" className="plus plus-btn" />
                                    </div>
                                    <div className="cart-item-price">
                                        $10 <span>$15</span>
                                    </div>
                                </div>
                                <button type="button" className="cart-close-btn">
                                    <i className="uil uil-multiply" />
                                </button>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="cart-product-img">
                                <img src="images/product/img-2.jpg" alt="" />
                                <div className="offer-badge">6% OFF</div>
                            </div>
                            <div className="cart-text">
                                <h4>Product Title Here</h4>
                                <div className="cart-radio">
                                    <ul className="kggrm-now">
                                        <li>
                                            <input type="radio" id="a5" name="cart2" />
                                            <label htmlFor="a5">0.50</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="a6" name="cart2" />
                                            <label htmlFor="a6">1kg</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="a7" name="cart2" />
                                            <label htmlFor="a7">2kg</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="qty-group">
                                    <div className="quantity buttons_added">
                                        <input
                                            type="button"
                                            defaultValue="-"
                                            className="minus minus-btn"
                                        />
                                        <input
                                            type="number"
                                            step={1}
                                            name="quantity"
                                            defaultValue={1}
                                            className="input-text qty text"
                                        />
                                        <input type="button" defaultValue="+" className="plus plus-btn" />
                                    </div>
                                    <div className="cart-item-price">
                                        $24 <span>$30</span>
                                    </div>
                                </div>
                                <button type="button" className="cart-close-btn">
                                    <i className="uil uil-multiply" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-footer">
                    <div className="cart-total-dil saving-total ">
                        <h4>Total Saving</h4>
                        <span>$11</span>
                    </div>
                    <div className="main-total-cart">
                        <h2>Total</h2>
                        <span>$35</span>
                    </div>
                    <div className="checkout-cart">
                        <a href="#" className="promo-code">
                            Have a promocode?
                        </a>
                        <a href="checkout.html" className="cart-checkout-btn hover-btn">
                            Proceed to Checkout
                        </a>
                    </div>
                </div>
            </div>




            <header className="header clearfix">
                <div className="top-header-group">
                    <div className="top-header">
                        <div className="main_logo" id="logo">
                            <a href="index.html">
                                <img src="images/logo.svg" alt="" />
                            </a>
                            <a href="index.html">
                                <img className="logo-inverse" src="images/dark-logo.svg" alt="" />
                            </a>
                        </div>
                        <div className="search120">
                            <div className="header_search position-relative">
                                <input
                                    className="prompt srch10"
                                    type="text"
                                    placeholder="Search for products.."
                                />
                                <i className="uil uil-search s-icon" />
                            </div>
                        </div>
                        <div className="header_right">
                            <ul>
                                <li>
                                    <a href="#" className="offer-link">
                                        <i className="uil uil-phone-alt" />
                                        1800-000-000
                                    </a>
                                </li>
                                <li>
                                    <a href="offers.html" className="offer-link">
                                        <i className="uil uil-gift" />
                                        Offers
                                    </a>
                                </li>
                                <li>
                                    <a href="faq.html" className="offer-link">
                                        <i className="uil uil-question-circle" />
                                        Help
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="dashboard_my_wishlist.html"
                                        className="option_links"
                                        title="Wishlist"
                                    >
                                        <i className="uil uil-heart icon_wishlist" />
                                        <span className="noti_count1">3</span>
                                    </a>
                                </li>
                                <li className="dropdown account-dropdown">
                                    <a
                                        href="#"
                                        className="opts_account"
                                        role="button"
                                        id="accountClick"
                                        data-bs-auto-close="outside"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img src="images/avatar/img-5.jpg" alt="" />
                                        <span className="user__name">John Doe</span>
                                        <i className="uil uil-angle-down" />
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-account dropdown-menu-end"
                                        aria-labelledby="accountClick"
                                        data-bs-popper="none"
                                    >
                                        <div className="night_mode_switch__btn">
                                            <a href="#" id="night-mode" className="btn-night-mode">
                                                <i className="uil uil-moon" /> Night mode
                                                <span className="btn-night-mode-switch">
                                                    <span className="uk-switch-button" />
                                                </span>
                                            </a>
                                        </div>
                                        <a href="dashboard_overview.html" className="channel_item">
                                            <i className="uil uil-apps icon__1" />
                                            Dashbaord
                                        </a>
                                        <a href="dashboard_my_orders.html" className="channel_item">
                                            <i className="uil uil-box icon__1" />
                                            My Orders
                                        </a>
                                        <a href="dashboard_my_wishlist.html" className="channel_item">
                                            <i className="uil uil-heart icon__1" />
                                            My Wishlist
                                        </a>
                                        <a href="dashboard_my_wallet.html" className="channel_item">
                                            <i className="uil uil-usd-circle icon__1" />
                                            My Wallet
                                        </a>
                                        <a href="dashboard_my_addresses.html" className="channel_item">
                                            <i className="uil uil-location-point icon__1" />
                                            My Address
                                        </a>
                                        <a href="offers.html" className="channel_item">
                                            <i className="uil uil-gift icon__1" />
                                            Offers
                                        </a>
                                        <a href="faq.html" className="channel_item">
                                            <i className="uil uil-info-circle icon__1" />
                                            Faq
                                        </a>
                                        <a href="sign_in.html" className="channel_item">
                                            <i className="uil uil-lock-alt icon__1" />
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sub-header-group">
                    <div className="sub-header">
                        <nav className="navbar navbar-expand-lg bg-gambo gambo-head navbar justify-content-lg-start pt-0 pb-0">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar"
                                aria-controls="offcanvasNavbar"
                            >
                                <span className="navbar-toggler-icon">
                                    <i className="uil uil-bars" />
                                </span>
                            </button>
                            <a
                                href="#"
                                className="category_drop hover-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#category_model"
                                title="Categories"
                            >
                                <i className="uil uil-apps" />
                                <span className="cate__icon">Select Category</span>
                            </a>
                            <div
                                className="offcanvas offcanvas-start"
                                tabIndex={-1}
                                id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel"
                            >
                                <div className="offcanvas-header">
                                    <div className="offcanvas-logo" id="offcanvasNavbarLabel">
                                        <img src="images/dark-logo-1.svg" alt="" />
                                    </div>
                                    <button
                                        type="button"
                                        className="close-btn"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    >
                                        <i className="uil uil-multiply" />
                                    </button>
                                </div>
                                <div className="offcanvas-body">
                                    <div className="offcanvas-category mb-4 d-block d-lg-none">
                                        <div className="offcanvas-search position-relative">
                                            <input
                                                className="canvas_search"
                                                type="text"
                                                placeholder="Search for products.."
                                            />
                                            <i className="uil uil-search hover-btn canvas-icon" />
                                        </div>
                                        <button
                                            className="category_drop_canvas hover-btn mt-4"
                                            data-bs-toggle="modal"
                                            data-bs-target="#category_model"
                                            title="Categories"
                                        >
                                            <i className="uil uil-apps" />
                                            <span className="cate__icon">Select Category</span>
                                        </button>
                                    </div>
                                    <ul className="navbar-nav justify-content-start flex-grow-1 pe_5">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                aria-current="page"
                                                href="index.html"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="shop_grid.html">
                                                New Products
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="shop_grid.html">
                                                Featured Products
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Blog
                                            </a>
                                            <ul className="dropdown-menu dropdown-submenu">
                                                <li>
                                                    <a className="dropdown-item" href="our_blog.html">
                                                        Our Blog
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog_no_sidebar.html">
                                                        Our Blog Two No Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog_left_sidebar.html">
                                                        Our Blog with Left Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog_right_sidebar.html">
                                                        Our Blog with Right Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog_detail_view.html">
                                                        Blog Detail View
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="blog_left_sidebar_single_view.html"
                                                    >
                                                        Blog Detail View with Sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Pages
                                            </a>
                                            <ul className="dropdown-menu dropdown-submenu">
                                                <li>
                                                    <a className="dropdown-item" href="dashboard_overview.html">
                                                        Account
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="about_us.html">
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="shop_grid.html">
                                                        Online Shop
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="single_product_view.html"
                                                    >
                                                        Single Product View
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="checkout.html">
                                                        Checkout
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="request_product.html">
                                                        Product Request
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="order_placed.html">
                                                        Order Placed
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="bill.html">
                                                        Bill Slip
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="job_detail_view.html">
                                                        Job Detail View
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="sign_in.html">
                                                        Sign In
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="sign_up.html">
                                                        Sign Up
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="forgot_password.html">
                                                        Forgot Password
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact_us.html">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="d-block d-lg-none">
                                        <ul className="offcanvas-help-links">
                                            <li>
                                                <a href="#" className="offer-link">
                                                    <i className="uil uil-phone-alt" />
                                                    1800-000-000
                                                </a>
                                            </li>
                                            <li>
                                                <a href="offers.html" className="offer-link">
                                                    <i className="uil uil-gift" />
                                                    Offers
                                                </a>
                                            </li>
                                            <li>
                                                <a href="faq.html" className="offer-link">
                                                    <i className="uil uil-question-circle" />
                                                    Help
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="offcanvas-copyright">
                                            <i className="uil uil-copyright" />
                                            Copyright 2022 <b>Gambolthemes</b> . All rights reserved
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sub_header_right">
                                <div className="header_cart">
                                    <a
                                        href="#"
                                        className="cart__btn hover-btn"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasRight"
                                        aria-controls="offcanvasRight"
                                    >
                                        <i className="uil uil-shopping-cart-alt" />
                                        <span>Cart</span>
                                        <ins>2</ins>
                                        <i className="uil uil-angle-down" />
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;
