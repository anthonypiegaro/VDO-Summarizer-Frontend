import React from "react";
import TypedText from "../summarizer/TypedText";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    };

    const goToRegister = () => {
        navigate("/register");
    };

    return (
        <div className="landing-page">
            <h1>
                <TypedText text="Youtube Summarizer" />
            </h1>
            <div className="landing-buttons-contianer">
                <button 
                    className="landing-button" 
                    type="submit"
                    onClick={goToLogin}>
                        Sign in
                </button>
                <button 
                    className="landing-button" 
                    type="submit"
                    onClick={goToRegister}>
                        Sign up
                </button>
            </div>
        </div>
    );
};

export default LandingPage;