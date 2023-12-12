import React, { useState, useEffect } from "react";
import HistoryButton from "./HistoryButton";
import NewSummaryButton from "./NewSummaryButton";

const HistoryBar = ({setSubmitted, setSummary, expanded, setExpanded, setTitle}) => {
    const [history, setHistory] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            await fetch("/api/summarizer/history/", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
              })
              .then(response => response.json())
              .then(data => setHistory(data))
              .catch(error => console.log(error));
        }

        fetchData();
    }, [])

    return (
        <>
            <div 
                className={`history-sidebar-button ${expanded ? "expanded" : ""} hamburger material-symbols-outlined`}
                onClick={() => setExpanded(!expanded)} 
            > 
                menu
            </div>
            <div id="history-bar-container" className={`${expanded ? "expanded" : ""}`}>
                <div className="history-bar-logo">Summarizer</div>
                <NewSummaryButton setExpanded={setExpanded}/>
                {history.map((summary, idx) => (
                    <HistoryButton
                        key={idx} 
                        id={summary.summary_obj_id}
                        title={summary.summary_obj_title}
                        setSubmitted={setSubmitted}
                        setSummary={setSummary}
                        setTitle={setTitle}
                        setExpanded={setExpanded}
                    />
                ))}
            </div>
        </>
    );
};

export default HistoryBar;