import React from "react";

const HistoryButton = ({id, title, setSummary, setSubmitted, setTitle, setExpanded}) => {
    
    const updateSummary = async () => {
        await fetch(`/api/summarizer/prev-summary/${id}`, {
            mathod: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response => response.json())
        .then(data => {
            setSummary("");
            setSubmitted(false);
            setSummary(data.video_summary);
            setSubmitted(true);
            setTitle(title);
        })
        .catch(error => console.log(error));
        setExpanded(false);
    }

    return (
        <div 
            className="history-button"
            onClick={updateSummary}>
            <p>{title}</p>
        </div>
    );
};

export default HistoryButton;