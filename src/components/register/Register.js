import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const moveToLogin = () => {
        navigate("/login")
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/register/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    confirm_password: confirmPassword,
                 }),
            });
            if (response.ok) {
                const response = await fetch("/api/token/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                     }),
                });
                const data = await response.json();
                localStorage.setItem("token", data.access);
                localStorage.setItem("refresh", data.refresh);
                navigate("/summarizer");
            } else {
                const errorData = await response.json();
                setError(errorData.detail || "Registration failed");
            }
        } catch (error) {
            console.log(error);
            setError("Network error: Unable to connect to server");
        }
        setLoading(false);
    }

    return (
        <div id="login">
            <div className="login-container">
                <div className="login-title">Sign up</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                            <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autocomplete="off"
                            />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit">
                    {loading ?
                            <i className="fa-solid fa-spinner fa-spin" style={{color: "#ffffff"}}></i> :
                            <p style={{margin: 0}}>Sign up</p>
                        }
                    </button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
            <div className="login-register">
                <div>Already a Summarizer?</div>
                <div 
                    className="login-register-btn"
                    onClick={moveToLogin}>
                        Sign in
                </div>
            </div>
        </div>
    );
};

export default Register;