import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const signout = () => {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <div 
            className="logout-button material-symbols-outlined"
            onClick={signout}
        >
            logout
        </div>
    );
}

export default Logout;