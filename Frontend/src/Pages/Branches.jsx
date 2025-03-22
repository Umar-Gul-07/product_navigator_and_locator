import React, { useEffect, useState } from "react";
import api from "../Utils/Axios";

function Branches() {
    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    // Fetch branches from API
    useEffect(() => {
        api.get("/api/branches/")
            .then(response => {
                setBranches(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError("Failed to load branches. Please try again.");
                setLoading(false);
            });
    }, []);

    // Filter branches based on search input
    const filteredBranches = branches.filter(branch =>
        branch.name.toLowerCase().includes(search.toLowerCase()) ||
        branch.phone.includes(search)
    );

    return (
        <>
            <div className="vendor-search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vendor-search-area-wrapper">
                                <h1 className="title">Branches List</h1>
                                <form className="search-vendor-form" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        placeholder="Search branches (by name or phone)..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
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
                            <div className="tab-content">
                                <div className="with-list mt--20 tab-pane fade show active">
                                    <div className="row g-4">
                                        {loading && <p>Loading branches...</p>}
                                        {error && <p className="text-danger">{error}</p>}
                                        {!loading && !error && filteredBranches.length === 0 && (
                                            <p className="text-danger mx-auto d-flex justify-content-center align-items-center">
                                                No branches found.
                                            </p>
                                        )}
                                        {!loading && !error && filteredBranches.map(branch => (
                                            <div key={branch.id} className="col-lg-6">
                                                <div className="single-vendor-area">
                                                    <div className="logo-vendor">
                                                        <img src={branch.image} alt={branch.name} />
                                                    </div>
                                                    <div className="inner">
                                                        <h3 className="title animated fadeIn">
                                                            {branch.name} <span className={branch.status === "Open" ? "open" : "closed"}>{branch.status}</span>
                                                        </h3>
                                                        <div className="stars-area">
                                                            <i className="fa-solid fa-star" /> {branch.rating} / 5
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-regular fa-location-dot" />
                                                            <p>{branch.address}</p>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-solid fa-phone-volume" />
                                                            <p>{branch.phone}</p>
                                                        </div>
                                                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">Visit Store</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Branches;
