import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../Utils/Store";

function Header() {
    const { state, dispatch } = useContext(Store)
    const { UserInfo } = state
    console.log(UserInfo)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({ type: "ClearUserInfo" });
        localStorage.removeItem("UserInfo");
        navigate("/")
        // window.location.href = "/login";
    };
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
                                                <Link to="/about" className="text-white">About Us</Link>
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
                                                <Link to="/" className="text-white">Track Order</Link>
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
                                    <Link to="/" className="logo-area">
                                        <img
                                            src="assets/images/logo/logo-01.png"
                                            alt="logo-main"
                                            className="logo"
                                            width="150px"
                                        />
                                    </Link>
                                    <div className="category-search-wrapper">

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
                                        {UserInfo ?
                                            <>
                                                <div className="dropdown">
                                                    {/* Account Button */}
                                                    <button
                                                        className="btn btn-border-only account dropdown-toggle"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fa-light fa-user" />
                                                        <span style={{ fontSize: "15px" }}> Account</span>
                                                    </button>

                                                    {/* Dropdown Menu */}
                                                    <ul className="dropdown-menu">

                                                        <li>
                                                            <Link className="dropdown-item" to="/history">History</Link>
                                                        </li>
                                                        <li>
                                                            <button className="dropdown-item text-danger" onClick={handleLogout}>
                                                                Logout
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <Link to="/shopping-list">
                                                </Link>
                                                <div className="btn-border-only cart category-hover-header">
                                                    <i className="fa-sharp fa-regular fa-cart-shopping" />

                                                    <Link to="/shopping-list" className="over_link" />
                                                    <span className="text">Shopping List</span>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <Link to="/login" className="btn-border-only account">
                                                    <i className="fa-light fa-user" />
                                                    <span>Sign in</span>
                                                </Link>

                                                <Link to="/registration" className="btn-border-only account">
                                                    <i className="fa-light fa-user" />
                                                    <span>Sign up</span>
                                                </Link>
                                            </>
                                        }


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
                                    <Link to="/" className="logo-area">
                                        <img
                                            src="assets/images/logo/logo-01.png"
                                            alt="logo-main"
                                            className="logo"
                                            width="150px"
                                        />
                                    </Link>

                                    <div className="main-wrapper-action-2 d-flex">

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

                                        <li>
                                            <Link to="/" className="main">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/product-list" className="main">
                                                ProductList
                                            </Link>
                                        </li>  <li>
                                            <Link to="/branches" className="main">
                                                Branches
                                            </Link>
                                        </li>  <li>
                                            <Link to="/about" className="main">
                                                About Us
                                            </Link>
                                        </li>  <li>
                                            <Link to="/contact" className="main">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* mobile menu area end */}
                        </div>

                    </div>
                </div>
                {/* button area wrapper start */}
                <div className="button-area-main-wrapper-menuy-sidebar mt--50">

                    <div className="buton-area-bottom">
                        {UserInfo ? <>
                            <div className="dropdown">
                                <button
                                    className="rts-btn btn-primary dropdown-toggle"
                                    type="button"
                                    id="accountDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Account
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                                    <li><Link className="dropdown-item" to="/settings">History</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item text-danger"  onClick={handleLogout}>Logout</Link></li>
                                </ul>
                            </div>
                            <Link to="/shopping-list" className="rts-btn btn-primary">
                                Shopping List
                            </Link>
                        </>
                            :
                            <>
                                <Link to="/login" className="rts-btn btn-primary">
                                    Sign In
                                </Link>
                                <Link to="/registration" className="rts-btn btn-primary">
                                    Sign Up
                                </Link>
                            </>
                        }
                    </div>
                </div>
                {/* button area wrapper end */}
            </div>


        </>
    )
}

export default Header;
