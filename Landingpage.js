import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // For styling (optional)

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <header>
                <h1>Welcome to OpenElective Registration</h1>
                <p>Select your electives with ease and precision.</p>
            </header>

            <div className="button-container">
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/register")}>Register</button>
            </div>
        </div>
    );
}

export default LandingPage;