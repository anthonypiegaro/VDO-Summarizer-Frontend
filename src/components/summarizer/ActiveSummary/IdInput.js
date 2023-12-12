import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


const IdInput = ({submitted, setSubmitted, setSummary, title, setTitle}) => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setLoading(true);

        await fetch("/api/summarizer/summary/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({"url": url})
        })
        .then((response) => {
            if (response.status === 401) {
                navigate("/login");
            }
            if (!response.ok) {
                return response.json().then((data) => {
                    
                    console.log("Bad Request Error:", data);
                    setError(data.error);
                });
            } else {
                
                return response.json().then((data) => {
                    setSubmitted(true);
                    setSummary(data.summary);
                    setTitle(data.title)
                });
            }
        })
        .catch((error) => {
            console.error(error);
            setError("An error has occurred");
        })
        .finally(() => {
            setLoading(false);
        });
    }

    return(
        <div id="id-input" >
            <form onSubmit={handleSubmit}>
            <div id="video-id-input-container">
                <label htmlFor="video-id">Video URL</label>
                {submitted ? (
                    <input
                        ref={inputRef}
                        type="text"
                        id="video-id"
                        name="video-id"
                        placeholder="Video URL"
                        required
                        readOnly={submitted}
                        autoCapitalize="off"
                        onChange={handleUrlChange}
                        autoComplete="off"
                        value={title}
                    />
                ) : (
                    <input
                    ref={inputRef}
                    type="text"
                    id="video-id"
                    name="video-id"
                    placeholder="Video URL"
                    required
                    readOnly={submitted}
                    autoCapitalize="off"
                    onChange={handleUrlChange}
                    autoComplete="off"
                    />
                )}
            </div>
            <button id="video-id-submit">
                {loading ?
                    <i className="fa-solid fa-spinner fa-spin" style={{color: "#ffffff"}}></i> :
                    <i className="fa-solid fa-paper-plane"></i>
                }
            </button>
            </form>
            {error && <div className="id-error">{error}</div>}
        </div>
    );
};

export default IdInput;