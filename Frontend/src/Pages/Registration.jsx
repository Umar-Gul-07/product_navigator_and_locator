import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Utils/Axios";

function Registration() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        if (formData.password1 !== formData.password2) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const response = await api.post("/auth/registration/", formData);
            setSuccess("Registration successful! Redirecting...");
            navigate("/login")
            
        } catch (err) {
            setError("Registration failed. Please check your details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="rts-navigation-area-breadcrumb bg_light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navigator-breadcrumb-wrapper">
                                <Link to="/">Home</Link>
                                <i className="fa-regular fa-chevron-right" />
                                <Link className="current" to="/registration">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-seperator bg_light-1">
                <div className="container">
                    <hr className="section-seperator" />
                </div>
            </div>

            <div className="rts-register-area rts-section-gap bg_light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="registration-wrapper-1">
                                <div className="logo-area mb--0">
                                    <img className="mb--10" src="assets/images/logo/fav.png" alt="logo" />
                                </div>
                                <h3 className="title animated fadeIn">Register Into Your Account</h3>

                                {error && <p className="text-danger text-center">{error}</p>}
                                {success && <p className="text-success text-center">{success}</p>}

                                <form className="registration-form" onSubmit={handleSubmit}>
                                    <div className="input-wrapper">
                                        <label htmlFor="username">Username*</label>
                                        <input 
                                            type="text" 
                                            id="username" 
                                            name="username" 
                                            value={formData.username} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                    <div className="input-wrapper">
                                        <label htmlFor="email">Email*</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                    <div className="input-wrapper">
                                        <label htmlFor="password1">Password*</label>
                                        <input 
                                            type="password" 
                                            id="password1" 
                                            name="password1" 
                                            value={formData.password1} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                    <div className="input-wrapper">
                                        <label htmlFor="password2">Confirm Password*</label>
                                        <input 
                                            type="password" 
                                            id="password2" 
                                            name="password2" 
                                            value={formData.password2} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                    <button className="rts-btn btn-primary" type="submit" disabled={loading}>
                                        {loading ? "Registering..." : "Register Account"}
                                    </button>
                                </form>

                                <div className="another-way-to-registration mt-5">
                                    <p>
                                        Already have an account? <Link to="/login" className="text-primary">Login</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;
