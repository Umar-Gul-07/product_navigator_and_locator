import React from 'react'

function Branches() {
    return (
        <>
            <div className="vendor-search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vendor-search-area-wrapper">
                                <h1 className="title">Vendors List</h1>
                                <form action="#" className="search-vendor-form">
                                    <input
                                        type="text"
                                        placeholder="Search vendors (by name or ID)..."
                                    />
                                    <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                        <div className="btn-text">Search</div>
                                        <div className="arrow-icon">
                                            <i className="fa-light fa-magnifying-glass" />
                                        </div>
                                        <div className="arrow-icon">
                                            <i className="fa-light fa-magnifying-glass" />
                                        </div>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vendor-search-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="filter-search-area-top-between filter-select-area">
                                <div className="top-filter">
                                    <span>Showing 1–20 of 57 results</span>
                                    <div className="right-end">
                                        <span>Sort: Short By Latest</span>
                                        <div className="button-tab-area">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="nav-link single-button "
                                                        id="home-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#home-tab-pane"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="home-tab-pane"
                                                        aria-selected="true"
                                                    >
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect
                                                                x="0.5"
                                                                y="0.5"
                                                                width={6}
                                                                height={6}
                                                                rx="1.5"
                                                                stroke="#2C3B28"
                                                            />
                                                            <rect
                                                                x="0.5"
                                                                y="9.5"
                                                                width={6}
                                                                height={6}
                                                                rx="1.5"
                                                                stroke="#2C3B28"
                                                            />
                                                            <rect
                                                                x="9.5"
                                                                y="0.5"
                                                                width={6}
                                                                height={6}
                                                                rx="1.5"
                                                                stroke="#2C3B28"
                                                            />
                                                            <rect
                                                                x="9.5"
                                                                y="9.5"
                                                                width={6}
                                                                height={6}
                                                                rx="1.5"
                                                                stroke="#2C3B28"
                                                            />
                                                        </svg>
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="nav-link single-button active"
                                                        id="profile-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#profile-tab-pane"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="profile-tab-pane"
                                                        aria-selected="false"
                                                    >
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect
                                                                x="0.5"
                                                                y="0.5"
                                                                width={6}
                                                                height={6}
                                                                rx="1.5"
                                                                stroke="#2C3C28"
                                                            />
                                                            <rect
                                                                x="0.5"
                                                                y="9.5"
                                                                width={6}
                                                                height={6}
                                                                rx="1.5"
                                                                stroke="#2C3C28"
                                                            />
                                                            <rect x={9} y={3} width={7} height={1} fill="#2C3C28" />
                                                            <rect
                                                                x={9}
                                                                y={12}
                                                                width={7}
                                                                height={1}
                                                                fill="#2C3C28"
                                                            />
                                                        </svg>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="mt--20 tab-pane fade"
                                    id="home-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-4">
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/01.svg" alt="vendor" />
                                                </div>
                                                <h3 className="title animated fadeIn">
                                                    Fresh Iuice Bar <span className="closed">Closed</span>
                                                </h3>
                                                <div className="stars-area">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <span>4.50 out of 5</span>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-regular fa-location-dot" />
                                                    <p>530 Post Ct El Dorado Hills California ,United States</p>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-solid fa-phone-volume" />
                                                    <p>+1 (511) 934-8170</p>
                                                </div>
                                                <a
                                                    href="vendor-details.html"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Visit Store</div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/02.svg" alt="vendor" />
                                                </div>
                                                <h3 className="title animated fadeIn">
                                                    Food Character <span className="open">Open</span>
                                                </h3>
                                                <div className="stars-area">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <span>4.50 out of 5</span>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-regular fa-location-dot" />
                                                    <p>530 Post Ct El Dorado Hills California ,United States</p>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-solid fa-phone-volume" />
                                                    <p>+1 (511) 934-8170</p>
                                                </div>
                                                <a
                                                    href="vendor-details.html"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Visit Store</div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/03.svg" alt="vendor" />
                                                </div>
                                                <h3 className="title animated fadeIn">
                                                    Food Forulard <span className="open">Open</span>
                                                </h3>
                                                <div className="stars-area">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <span>4.50 out of 5</span>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-regular fa-location-dot" />
                                                    <p>530 Post Ct El Dorado Hills California ,United States</p>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-solid fa-phone-volume" />
                                                    <p>+1 (511) 934-8170</p>
                                                </div>
                                                <a
                                                    href="vendor-details.html"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Visit Store</div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/04.svg" alt="vendor" />
                                                </div>
                                                <h3 className="title animated fadeIn">
                                                    Authentic Grocery <span className="closed">Closed</span>
                                                </h3>
                                                <div className="stars-area">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <span>4.50 out of 5</span>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-regular fa-location-dot" />
                                                    <p>530 Post Ct El Dorado Hills California ,United States</p>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-solid fa-phone-volume" />
                                                    <p>+1 (511) 934-8170</p>
                                                </div>
                                                <a
                                                    href="vendor-details.html"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Visit Store</div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/05.svg" alt="vendor" />
                                                </div>
                                                <h3 className="title animated fadeIn">
                                                    Fresh Food<span className="open">Open</span>
                                                </h3>
                                                <div className="stars-area">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <span>4.50 out of 5</span>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-regular fa-location-dot" />
                                                    <p>530 Post Ct El Dorado Hills California ,United States</p>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-solid fa-phone-volume" />
                                                    <p>+1 (511) 934-8170</p>
                                                </div>
                                                <a
                                                    href="vendor-details.html"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Visit Store</div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/06.svg" alt="vendor" />
                                                </div>
                                                <h3 className="title animated fadeIn">
                                                    Food Forulard <span className="open">Open</span>
                                                </h3>
                                                <div className="stars-area">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <span>4.50 out of 5</span>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-regular fa-location-dot" />
                                                    <p>530 Post Ct El Dorado Hills California ,United States</p>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-solid fa-phone-volume" />
                                                    <p>+1 (511) 934-8170</p>
                                                </div>
                                                <a
                                                    href="vendor-details.html"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Visit Store</div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/07.svg" alt="vendor" />
                                                </div>
                                                <h3 className="title animated fadeIn">
                                                    Food Forulard <span className="open">Open</span>
                                                </h3>
                                                <div className="stars-area">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <span>4.50 out of 5</span>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-regular fa-location-dot" />
                                                    <p>530 Post Ct El Dorado Hills California ,United States</p>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-solid fa-phone-volume" />
                                                    <p>+1 (511) 934-8170</p>
                                                </div>
                                                <a
                                                    href="vendor-details.html"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Visit Store</div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/08.svg" alt="vendor" />
                                                </div>
                                                <h3 className="title animated fadeIn">
                                                    Botanic Natural Product<span className="open">open</span>
                                                </h3>
                                                <div className="stars-area">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <span>4.50 out of 5</span>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-regular fa-location-dot" />
                                                    <p>530 Post Ct El Dorado Hills California ,United States</p>
                                                </div>
                                                <div className="location">
                                                    <i className="fa-solid fa-phone-volume" />
                                                    <p>+1 (511) 934-8170</p>
                                                </div>
                                                <a
                                                    href="vendor-details.html"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Visit Store</div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-light fa-arrow-right" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="with-list mt--20 tab-pane fade  show active"
                                    id="profile-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/01.svg" alt="vendor" />
                                                </div>
                                                <div className="inner">
                                                    <h3 className="title animated fadeIn">
                                                        Fresh Iuice Bar <span className="closed">Closed</span>
                                                    </h3>
                                                    <div className="stars-area">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <span>4.50 out of 5</span>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-regular fa-location-dot" />
                                                        <p>
                                                            530 Post Ct El Dorado Hills California ,United States
                                                        </p>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-solid fa-phone-volume" />
                                                        <p>+1 (511) 934-8170</p>
                                                    </div>
                                                    <a
                                                        href="vendor-details.html"
                                                        className="rts-btn btn-primary radious-sm with-icon"
                                                    >
                                                        <div className="btn-text">Visit Store</div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/02.svg" alt="vendor" />
                                                </div>
                                                <div className="inner">
                                                    <h3 className="title animated fadeIn">
                                                        Food Character <span className="open">Open</span>
                                                    </h3>
                                                    <div className="stars-area">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <span>4.50 out of 5</span>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-regular fa-location-dot" />
                                                        <p>
                                                            530 Post Ct El Dorado Hills California ,United States
                                                        </p>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-solid fa-phone-volume" />
                                                        <p>+1 (511) 934-8170</p>
                                                    </div>
                                                    <a
                                                        href="vendor-details.html"
                                                        className="rts-btn btn-primary radious-sm with-icon"
                                                    >
                                                        <div className="btn-text">Visit Store</div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/03.svg" alt="vendor" />
                                                </div>
                                                <div className="inner">
                                                    <h3 className="title animated fadeIn">
                                                        Food Forulard <span className="open">Open</span>
                                                    </h3>
                                                    <div className="stars-area">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <span>4.50 out of 5</span>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-regular fa-location-dot" />
                                                        <p>
                                                            530 Post Ct El Dorado Hills California ,United States
                                                        </p>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-solid fa-phone-volume" />
                                                        <p>+1 (511) 934-8170</p>
                                                    </div>
                                                    <a
                                                        href="vendor-details.html"
                                                        className="rts-btn btn-primary radious-sm with-icon"
                                                    >
                                                        <div className="btn-text">Visit Store</div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/04.svg" alt="vendor" />
                                                </div>
                                                <div className="inner">
                                                    <h3 className="title animated fadeIn">
                                                        Authentic Grocery <span className="closed">Closed</span>
                                                    </h3>
                                                    <div className="stars-area">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <span>4.50 out of 5</span>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-regular fa-location-dot" />
                                                        <p>
                                                            530 Post Ct El Dorado Hills California ,United States
                                                        </p>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-solid fa-phone-volume" />
                                                        <p>+1 (511) 934-8170</p>
                                                    </div>
                                                    <a
                                                        href="vendor-details.html"
                                                        className="rts-btn btn-primary radious-sm with-icon"
                                                    >
                                                        <div className="btn-text">Visit Store</div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/05.svg" alt="vendor" />
                                                </div>
                                                <div className="inner">
                                                    <h3 className="title animated fadeIn">
                                                        Fresh Food<span className="open">Open</span>
                                                    </h3>
                                                    <div className="stars-area">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <span>4.50 out of 5</span>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-regular fa-location-dot" />
                                                        <p>
                                                            530 Post Ct El Dorado Hills California ,United States
                                                        </p>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-solid fa-phone-volume" />
                                                        <p>+1 (511) 934-8170</p>
                                                    </div>
                                                    <a
                                                        href="vendor-details.html"
                                                        className="rts-btn btn-primary radious-sm with-icon"
                                                    >
                                                        <div className="btn-text">Visit Store</div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/06.svg" alt="vendor" />
                                                </div>
                                                <div className="inner">
                                                    <h3 className="title animated fadeIn">
                                                        Food Forulard <span className="open">Open</span>
                                                    </h3>
                                                    <div className="stars-area">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <span>4.50 out of 5</span>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-regular fa-location-dot" />
                                                        <p>
                                                            530 Post Ct El Dorado Hills California ,United States
                                                        </p>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-solid fa-phone-volume" />
                                                        <p>+1 (511) 934-8170</p>
                                                    </div>
                                                    <a
                                                        href="vendor-details.html"
                                                        className="rts-btn btn-primary radious-sm with-icon"
                                                    >
                                                        <div className="btn-text">Visit Store</div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/07.svg" alt="vendor" />
                                                </div>
                                                <div className="inner">
                                                    <h3 className="title animated fadeIn">
                                                        Food Forulard <span className="open">Open</span>
                                                    </h3>
                                                    <div className="stars-area">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <span>4.50 out of 5</span>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-regular fa-location-dot" />
                                                        <p>
                                                            530 Post Ct El Dorado Hills California ,United States
                                                        </p>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-solid fa-phone-volume" />
                                                        <p>+1 (511) 934-8170</p>
                                                    </div>
                                                    <a
                                                        href="vendor-details.html"
                                                        className="rts-btn btn-primary radious-sm with-icon"
                                                    >
                                                        <div className="btn-text">Visit Store</div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-vendor-area">
                                                <div className="logo-vendor">
                                                    <img src="assets/images/vendor/08.svg" alt="vendor" />
                                                </div>
                                                <div className="inner">
                                                    <h3 className="title animated fadeIn">
                                                        Botanic Natural Product<span className="open">open</span>
                                                    </h3>
                                                    <div className="stars-area">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <span>4.50 out of 5</span>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-regular fa-location-dot" />
                                                        <p>
                                                            530 Post Ct El Dorado Hills California ,United States
                                                        </p>
                                                    </div>
                                                    <div className="location">
                                                        <i className="fa-solid fa-phone-volume" />
                                                        <p>+1 (511) 934-8170</p>
                                                    </div>
                                                    <a
                                                        href="vendor-details.html"
                                                        className="rts-btn btn-primary radious-sm with-icon"
                                                    >
                                                        <div className="btn-text">Visit Store</div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                        <div className="arrow-icon">
                                                            <i className="fa-light fa-arrow-right" />
                                                        </div>
                                                    </a>
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

export default Branches
