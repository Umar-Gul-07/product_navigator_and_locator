import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Utils/Axios";
import {Store} from "../Utils/Store"
function Login() {
    const { dispatch } = useContext(Store);

    const navigate = useNavigate()

    const [formData, setFormData] = useState({ email: "", password: "" });
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

        try {
            const response = await api.post("/auth/login/", formData);
            setSuccess("Login successful! Redirecting...");
            console.log(response)
            dispatch({ type: "UserLoggedIn", payload: response.data.key });
            navigate("/")
        } catch (err) {
            setError("Invalid email or password. Please try again.");
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
                                < Link to="/">Home </Link>
                                <i className="fa-regular fa-chevron-right" />
                                <Link className="current" to="/login">
                                    Login
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
                                <h3 className="title animated fadeIn">Login Into Your Account</h3>

                                {error && <p className="text-danger text-center">{error}</p>}
                                {success && <p className="text-success text-center">{success}</p>}

                                <form className="registration-form" onSubmit={handleSubmit}>
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
                                        <label htmlFor="password">Password*</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button className="rts-btn btn-primary" type="submit" disabled={loading}>
                                        {loading ? "Logging in..." : "Login Account"}
                                    </button>
                                </form>

                                <div className="another-way-to-registration mt-5">

                                    <p>
                                        Don't have an account? < Link to="/registration" className="text-primary">Register </Link>
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

export default Login;
