import React, { useState }from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const moveToRegister = () => {
        navigate("/register");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/token/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.access);
                localStorage.setItem("refresh", data.refresh);
                navigate("/summarizer");
            } else {
                const errorData = await response.json();
                setError(errorData.detail || "Login failed");
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
                <div className="login-title">Sign in</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                            <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            autoComplete="off"
                            autoCapitalize="none"
                            onChange={(e) => setUsername(e.target.value)}
                            required
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
                    <button type="submit">
                        {loading ?
                            <i className="fa-solid fa-spinner fa-spin" style={{color: "#ffffff"}}></i> :
                            <p style={{margin: 0}}>Sign in</p>
                        }
                    </button>
                </form>
                {error && <div className="error">{error}</div>}
            </div>
            <div className="login-register">
                <div>New to Summarizer?</div>
                <div 
                    className="login-register-btn"
                    onClick={moveToRegister}>
                        Join Now
                </div>
            </div>
        </div>
    );
};

export default Login;