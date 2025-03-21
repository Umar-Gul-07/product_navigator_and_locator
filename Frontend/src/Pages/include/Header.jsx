
function Header() {
    return (
        <>
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
