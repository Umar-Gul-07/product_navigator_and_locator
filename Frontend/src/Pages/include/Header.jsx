import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="rts-header-one-area-one">
                <div className="header-top-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-mid-wrapper-between">
                                    <div className="nav-sm-left">
                                        <ul className="nav-h_top" >
                                            <li>
                                                <Link to="about.html" className="text-white">About Us</Link>
                                            </li>


                                        </ul>
                                        <p className="para text-white">
                                            We are open to your everyday from 7:00 to 22:00
                                        </p>
                                    </div>
                                    <div className="nav-sm-left">
                                        <ul className="nav-h_top language">
                                            <li className="category-hover-header language-hover">
                                                <Link to="#" className="text-white " style={{ marginLeft: "end" }}> English</Link>
                                                <ul className="category-sub-menu">
                                                    <li>
                                                        <Link to="#" className="menu-item">
                                                            <span >Italian</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="menu-item">
                                                            <span>Russian</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="menu-item">
                                                            <span>Chinian</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="category-hover-header language-hover">
                                                <Link to="#" className="text-white">USD</Link>
                                                <ul className="category-sub-menu">
                                                    <li>
                                                        <Link to="#" className="menu-item">
                                                            <span>Rubol</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="menu-item">
                                                            <span>Rupi</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="menu-item">
                                                            <span>Euro</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="trackorder.html" className="text-white">Track Order</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search-header-area-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="logo-search-category-wrapper">
                                    <Link to="index.html" className="logo-area">
                                        <img
                                            src="assets/images/logo/logo-01.svg"
                                            alt="logo-main"
                                            className="logo"
                                        />
                                    </Link>
                                    <div className="category-search-wrapper">
                                        <div className="category-btn category-hover-header">
                                            <img
                                                className="parent"
                                                src="assets/images/icons/bar-1.svg"
                                                alt="icons"
                                            />
                                            <span>Categories</span>
                                            <ul
                                                className="category-sub-menu metismenu"
                                                id="category-active-four"
                                            >
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/01.svg" alt="icons" />
                                                        <span>Breakfast &amp; Dairy</span>
                                                        <i className="fa-regular fa-plus" />
                                                    </Link>
                                                    <ul className="submenu mm-collapse">
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                Breakfast
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                Dinner
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                {" "}
                                                                Pumking
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/02.svg" alt="icons" />
                                                        <span>Meats &amp; Seafood</span>
                                                        <i className="fa-regular fa-plus" />
                                                    </Link>
                                                    <ul className="submenu mm-collapse">
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                Breakfast
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                Dinner
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                {" "}
                                                                Pumking
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/03.svg" alt="icons" />
                                                        <span>Breads &amp; Bakery</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/04.svg" alt="icons" />
                                                        <span>Chips &amp; Snacks</span>
                                                        <i className="fa-regular fa-plus" />
                                                    </Link>
                                                    <ul className="submenu mm-collapse">
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                Breakfast
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                Dinner
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                {" "}
                                                                Pumking
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/05.svg" alt="icons" />
                                                        <span>Medical Healthcare</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/06.svg" alt="icons" />
                                                        <span>Breads &amp; Bakery</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/07.svg" alt="icons" />
                                                        <span>Biscuits &amp; Snacks</span>
                                                        <i className="fa-regular fa-plus" />
                                                    </Link>
                                                    <ul className="submenu mm-collapse">
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                Breakfast
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                Dinner
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="mobile-menu-link" href="#">
                                                                {" "}
                                                                Pumking
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/08.svg" alt="icons" />
                                                        <span>Frozen Foods</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/09.svg" alt="icons" />
                                                        <span>Grocery &amp; Staples</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/10.svg" alt="icons" />
                                                        <span>Other Items</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <form action="#" className="search-header">
                                            <input
                                                type="text"
                                                placeholder="Search for products, categories or brands"
                                                required=""
                                            />
                                            <Link
                                                href="#"
                                                className="rts-btn btn-primary radious-sm with-icon"
                                            >
                                                <div className="btn-text">Search</div>
                                                <div className="arrow-icon">
                                                    <i className="fa-light fa-magnifying-glass" />
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-light fa-magnifying-glass" />
                                                </div>
                                            </Link>
                                        </form>
                                    </div>
                                    <div className="actions-area">
                                        <div className="search-btn" id="searchs">
                                            <svg
                                                width={17}
                                                height={16}
                                                viewBox="0 0 17 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z"
                                                    fill="#1F1F25"
                                                />
                                            </svg>
                                        </div>
                                        <div className="menu-btn" id="menu-btn">
                                            <svg
                                                width={20}
                                                height={16}
                                                viewBox="0 0 20 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect y={14} width={20} height={2} fill="#1F1F25" />
                                                <rect y={7} width={20} height={2} fill="#1F1F25" />
                                                <rect width={20} height={2} fill="#1F1F25" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="accont-wishlist-cart-area-header">
                                        <Link to="/login" className="btn-border-only account">
                                            <i className="fa-light fa-user" />
                                            <span>Sign in</span>
                                        </Link>

                                        <Link to="/registration" className="btn-border-only account">
                                            <i className="fa-light fa-user" />
                                            <span>Sign up</span>
                                        </Link>
                                        <Link to="/" className="btn-border-only account">
                                            <i className="fa-light fa-user" />
                                            <span>Account</span>
                                        </Link>

                                        <div className="btn-border-only cart category-hover-header">
                                            <i className="fa-sharp fa-regular fa-cart-shopping" />
                                            <Link to="/shoping-list">
                                            <span className="text">My Shopping List</span>
                                            </Link>
                                            <span className="number">2</span>
                                            <Link to="/shopping-list" className="over_link" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-header-nav-area-one header--sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="nav-and-btn-wrapper">
                                    <div className="nav-area">
                                        <nav>
                                            <ul className="parent-nav">
                                                <li className="parent has-dropdown">
                                                    <Link className="nav-link" to="/">
                                                        Home
                                                    </Link>

                                                </li>
                                               
                                                <li className="parent with-megamenu">
                                                    <Link to="/product-list">ProductList</Link>

                                                </li>
                                                <li className="parent has-dropdown">
                                                    <Link className="nav-link" to="/branches">
                                                        Branches
                                                    </Link>

                                                </li>
                                                <li className="parent">
                                                    <Link to="/about">About</Link>
                                                </li>

                                                <li className="parent">
                                                    <Link to="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* button-area */}
                                    <div className="right-btn-area">
                                        <Link to="#" className="btn-narrow">
                                            Trending Products
                                        </Link>
                                        <button className="rts-btn btn-primary">
                                            Get 30% Discount Now
                                            <span>Sale</span>
                                        </button>
                                    </div>
                                    {/* button-area end */}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="logo-search-category-wrapper after-md-device-header">
                                    <Link to="index.html" className="logo-area">
                                        <img
                                            src="assets/images/logo/logo-01.svg"
                                            alt="logo-main"
                                            className="logo"
                                        />
                                    </Link>
                                    <div className="category-search-wrapper">
                                        <div className="category-btn category-hover-header">
                                            <img
                                                className="parent"
                                                src="assets/images/icons/bar-1.svg"
                                                alt="icons"
                                            />
                                            <span>Categories</span>
                                            <ul className="category-sub-menu">
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/01.svg" alt="icons" />
                                                        <span>Breakfast &amp; Dairy</span>
                                                        <i className="fa-regular fa-plus" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/02.svg" alt="icons" />
                                                        <span>Meats &amp; Seafood</span>
                                                        <i className="fa-regular fa-plus" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/03.svg" alt="icons" />
                                                        <span>Breads &amp; Bakery</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/04.svg" alt="icons" />
                                                        <span>Chips &amp; Snacks</span>
                                                        <i className="fa-regular fa-plus" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/05.svg" alt="icons" />
                                                        <span>Medical Healthcare</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/06.svg" alt="icons" />
                                                        <span>Breads &amp; Bakery</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/07.svg" alt="icons" />
                                                        <span>Biscuits &amp; Snacks</span>
                                                        <i className="fa-regular fa-plus" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/08.svg" alt="icons" />
                                                        <span>Frozen Foods</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/09.svg" alt="icons" />
                                                        <span>Grocery &amp; Staples</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="menu-item">
                                                        <img src="assets/images/icons/10.svg" alt="icons" />
                                                        <span>Other Items</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <form action="#" className="search-header">
                                            <input
                                                type="text"
                                                placeholder="Search for products, categories or brands"
                                                required=""
                                            />
                                            <button className="rts-btn btn-primary radious-sm with-icon">
                                                <span className="btn-text">Search</span>
                                                <span className="arrow-icon">
                                                    <i className="fa-light fa-magnifying-glass" />
                                                </span>
                                                <span className="arrow-icon">
                                                    <i className="fa-light fa-magnifying-glass" />
                                                </span>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="main-wrapper-action-2 d-flex">
                                        <div className="accont-wishlist-cart-area-header">
                                            <Link to="account.html" className="btn-border-only account">
                                                <i className="fa-light fa-user" />
                                                Account
                                            </Link>
                                            <Link to="wishlist.html" className="btn-border-only wishlist">
                                                <i className="fa-regular fa-heart" />
                                                Wishlist
                                            </Link>
                                            <div className="btn-border-only cart category-hover-header">
                                                <i className="fa-sharp fa-regular fa-cart-shopping" />
                                                <span className="text">My Cart</span>
                                                <div className="category-sub-menu card-number-show">
                                                    <h5 className="shopping-cart-number">Shopping Cart (03)</h5>
                                                    <div className="cart-item-1 border-top">
                                                        <div className="img-name">
                                                            <div className="thumbanil">
                                                                <img src="assets/images/shop/cart-1.png" alt="" />
                                                            </div>
                                                            <div className="details">
                                                                <Link to="shop-details.html">
                                                                    <h5 className="title">
                                                                        Foster Farms Breast Nuggets Shaped Chicken
                                                                    </h5>
                                                                </Link>
                                                                <div className="number">
                                                                    1 <i className="fa-regular fa-x" />
                                                                    <span>$36.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="close-c1">
                                                            <i className="fa-regular fa-x" />
                                                        </div>
                                                    </div>
                                                    <div className="cart-item-1">
                                                        <div className="img-name">
                                                            <div className="thumbanil">
                                                                <img src="assets/images/shop/05.png" alt="" />
                                                            </div>
                                                            <div className="details">
                                                                <Link to="shop-details.html">
                                                                    <h5 className="title">
                                                                        Foster Farms Breast Nuggets Shaped Chicken
                                                                    </h5>
                                                                </Link>
                                                                <div className="number">
                                                                    1 <i className="fa-regular fa-x" />
                                                                    <span>$36.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="close-c1">
                                                            <i className="fa-regular fa-x" />
                                                        </div>
                                                    </div>
                                                    <div className="cart-item-1">
                                                        <div className="img-name">
                                                            <div className="thumbanil">
                                                                <img src="assets/images/shop/04.png" alt="" />
                                                            </div>
                                                            <div className="details">
                                                                <Link to="shop-details.html">
                                                                    <h5 className="title">
                                                                        Foster Farms Breast Nuggets Shaped Chicken
                                                                    </h5>
                                                                </Link>
                                                                <div className="number">
                                                                    1 <i className="fa-regular fa-x" />
                                                                    <span>$36.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="close-c1">
                                                            <i className="fa-regular fa-x" />
                                                        </div>
                                                    </div>
                                                    <div className="sub-total-cart-balance">
                                                        <div className="bottom-content-deals mt--10">
                                                            <div className="top">
                                                                <span>Sub Total:</span>
                                                                <span className="number-c">$108.00</span>
                                                            </div>
                                                            <div className="single-progress-area-incard">
                                                                <div className="progress">
                                                                    <div
                                                                        className="progress-bar wow fadeInLeft"
                                                                        role="progressbar"
                                                                        style={{ width: "80%" }}
                                                                        aria-valuenow={25}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p>
                                                                Spend More <span>$125.00</span> to reach{" "}
                                                                <span>Free Shipping</span>
                                                            </p>
                                                        </div>
                                                        <div className="button-wrapper d-flex align-items-center justify-content-between">
                                                            <Link to="cart.html" className="rts-btn btn-primary ">
                                                                View Cart
                                                            </Link>
                                                            <Link
                                                                href="checkout.html"
                                                                className="rts-btn btn-primary border-only"
                                                            >
                                                                CheckOut
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link to="cart.html" className="over_link" />
                                            </div>
                                        </div>
                                        <div className="actions-area">
                                            <div className="search-btn" id="search">
                                                <svg
                                                    width={17}
                                                    height={16}
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z"
                                                        fill="#1F1F25"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="menu-btn">
                                                <svg
                                                    width={20}
                                                    height={16}
                                                    viewBox="0 0 20 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect y={14} width={20} height={2} fill="#1F1F25" />
                                                    <rect y={7} width={20} height={2} fill="#1F1F25" />
                                                    <rect width={20} height={2} fill="#1F1F25" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="side-bar" className="side-bar header-two">
                <button className="close-icon-menu">
                    <i className="far fa-times" />
                </button>
                <form action="#" className="search-input-area-menu mt--30">
                    <input type="text" placeholder="Search..." required="" />
                    <button>
                        <i className="fa-light fa-magnifying-glass" />
                    </button>
                </form>
                <div className="mobile-menu-nav-area tab-nav-btn mt--20">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button
                                className="nav-link active"
                                id="nav-home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-home"
                                type="button"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                            >
                                Menu
                            </button>
                            <button
                                className="nav-link"
                                id="nav-profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-profile"
                                type="button"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                            >
                                Category
                            </button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                            tabIndex={0}
                        >
                            {/* mobile menu area start */}
                            <div className="mobile-menu-main">
                                <nav className="nav-main mainmenu-nav mt--30">
                                    <ul className="mainmenu metismenu" id="mobile-menu-active">
                                        <li className="has-droupdown">
                                            <Link to="#" className="main">
                                                Home
                                            </Link>
                                            <ul className="submenu mm-collapse">
                                                <li>
                                                    <Link className="mobile-menu-link" href="index.html">
                                                        Home One
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="index-two.html">
                                                        Home Two
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="index-three.html">
                                                        Home Three
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="index-four.html">
                                                        Home Four
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="index-five.html">
                                                        {" "}
                                                        Home Five
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="about.html" className="main">
                                                About
                                            </Link>
                                        </li>
                                        <li className="has-droupdown">
                                            <Link to="#" className="main">
                                                Pages
                                            </Link>
                                            <ul className="submenu mm-collapse">
                                                <li>
                                                    <Link className="mobile-menu-link" href="about.html">
                                                        About
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="faq.html">
                                                        Faq's
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="invoice.html">
                                                        Invoice
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="contact.html">
                                                        Contact
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="register.html">
                                                        Register
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="login.html">
                                                        Login
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="privacy-policy.html">
                                                        Privacy Policy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="cookies-policy.html">
                                                        Cookies Policy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="terms-condition.html">
                                                        Terms Condition
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="mobile-menu-link" href="404.html">
                                                        Error Page
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-droupdown">
                                            <Link to="#" className="main">
                                                Shop
                                            </Link>
                                            <ul className="submenu mm-collapse">
                                                <li className="has-droupdown third-lvl">
                                                    <Link className="main" href="#">
                                                        Shop Layout
                                                    </Link>
                                                    <ul className="submenu-third-lvl mm-collapse">
                                                        <li>
                                                            <Link to="shop-grid-sidebar.html" />
                                                            Shop Grid Sidebar
                                                        </li>
                                                        <li>
                                                            <Link to="shop-list-sidebar.html" />
                                                            Shop List Sidebar
                                                        </li>
                                                        <li>
                                                            <Link to="shop-grid-top-filter.html" />
                                                            Shop Grid Top Filter
                                                        </li>
                                                        <li>
                                                            <Link to="shop-list-top-filter.html" />
                                                            Shop List Top Filter
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-droupdown third-lvl">
                                                    <Link className="main" href="#">
                                                        Shop Details
                                                    </Link>
                                                    <ul className="submenu-third-lvl mm-collapse">
                                                        <li>
                                                            <Link to="shop-details.html" />
                                                            Shop Details
                                                        </li>
                                                        <li>
                                                            <Link to="shop-details-2.html" />
                                                            Shop Details 2
                                                        </li>
                                                        <li>
                                                            <Link to="shop-grid-top-filter.html" />
                                                            Shop Grid Top Filter
                                                        </li>
                                                        <li>
                                                            <Link to="shop-list-top-filter.html" />
                                                            Shop List Top Filter
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-droupdown third-lvl">
                                                    <Link className="main" href="#">
                                                        Product Feature
                                                    </Link>
                                                    <ul className="submenu-third-lvl mm-collapse">
                                                        <li>
                                                            <Link to="shop-details-variable.html" />
                                                            Shop Details Variable
                                                        </li>
                                                        <li>
                                                            <Link to="shop-details-affiliats.html" />
                                                            Shop Details Affiliats
                                                        </li>
                                                        <li>
                                                            <Link to="shop-details-group.html" />
                                                            Shop Details Group
                                                        </li>
                                                        <li>
                                                            <Link to="shop-compare.html" />
                                                            Shop Compare
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-droupdown third-lvl">
                                                    <Link className="main" href="#">
                                                        Shop Others
                                                    </Link>
                                                    <ul className="submenu-third-lvl mm-collapse">
                                                        <li>
                                                            <Link to="cart.html" />
                                                            Cart
                                                        </li>
                                                        <li>
                                                            <Link to="checkout.html" />
                                                            Checkout
                                                        </li>
                                                        <li>
                                                            <Link to="trackorder.html" />
                                                            Trackorder
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-droupdown">
                                            <Link to="#" className="main">
                                                Blog
                                            </Link>
                                            <ul className="submenu mm-collapse">
                                                <li>
                                                    <Link className="mobile-menu-link" href="blog.html">
                                                        Blog
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="mobile-menu-link"
                                                        href="blog-list-left-sidebar.html"
                                                    >
                                                        Blog Left Sidebar
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="mobile-menu-link"
                                                        href="blog-list-right-sidebar.html"
                                                    >
                                                        Blog List Right Sidebar
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="contact.html" className="main">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* mobile menu area end */}
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                            tabIndex={0}
                        >
                            <div className="category-btn category-hover-header menu-category">
                                <ul className="category-sub-menu metismenu" id="category-active-menu">
                                    <li>
                                        <Link to="#" className="menu-item">
                                            <img src="assets/images/icons/01.svg" alt="icons" />
                                            <span>Breakfast &amp; Dairy</span>
                                            <i className="fa-regular fa-plus" />
                                        </Link>
                                        <ul className="submenu mm-collapse">
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    Breakfast
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    Dinner
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    {" "}
                                                    Pumking
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#" className="menu-item">
                                            <img src="assets/images/icons/02.svg" alt="icons" />
                                            <span>Meats &amp; Seafood</span>
                                            <i className="fa-regular fa-plus" />
                                        </Link>
                                        <ul className="submenu mm-collapse">
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    Breakfast
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    Dinner
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    {" "}
                                                    Pumking
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#" className="menu-item">
                                            <img src="assets/images/icons/03.svg" alt="icons" />
                                            <span>Breads &amp; Bakery</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="menu-item">
                                            <img src="assets/images/icons/04.svg" alt="icons" />
                                            <span>Chips &amp; Snacks</span>
                                            <i className="fa-regular fa-plus" />
                                        </Link>
                                        <ul className="submenu mm-collapse">
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    Breakfast
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    Dinner
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    {" "}
                                                    Pumking
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#" className="menu-item">
                                            <img src="assets/images/icons/05.svg" alt="icons" />
                                            <span>Medical Healthcare</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="menu-item">
                                            <img src="assets/images/icons/06.svg" alt="icons" />
                                            <span>Breads &amp; Bakery</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="menu-item">
                                            <img src="assets/images/icons/07.svg" alt="icons" />
                                            <span>Biscuits &amp; Snacks</span>
                                            <i className="fa-regular fa-plus" />
                                        </Link>
                                        <ul className="submenu mm-collapse">
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    Breakfast
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    Dinner
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="mobile-menu-link" href="#">
                                                    {" "}
                                                    Pumking
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#" className="menu-item">
                                            <img src="assets/images/icons/08.svg" alt="icons" />
                                            <span>Frozen Foods</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="menu-item">
                                            <img src="assets/images/icons/09.svg" alt="icons" />
                                            <span>Grocery &amp; Staples</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="menu-item">
                                            <img src="assets/images/icons/10.svg" alt="icons" />
                                            <span>Other Items</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* button area wrapper start */}
                <div className="button-area-main-wrapper-menuy-sidebar mt--50">
                    <div className="contact-area">
                        <div className="phone">
                            <i className="fa-light fa-headset" />
                            <Link to="#">02345697871</Link>
                        </div>
                        <div className="phone">
                            <i className="fa-light fa-envelope" />
                            <Link to="#">02345697871</Link>
                        </div>
                    </div>
                    <div className="buton-area-bottom">
                        <Link to="login.html" className="rts-btn btn-primary">
                            Sign In
                        </Link>
                        <Link to="register.html" className="rts-btn btn-primary">
                            Sign Up
                        </Link>
                    </div>
                </div>
                {/* button area wrapper end */}
            </div>


        </>
    )
}

export default Header;
