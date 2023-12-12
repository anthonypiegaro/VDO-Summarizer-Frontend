import React, { useState } from "react"
import ActiveSummary from "./ActiveSummary/ActiveSummary";
import HistoryBar from "./Sidebar/HistoryBar";
import Logout from "./Sidebar/Logout";

const Summarizer = () => {
    const [submitted, setSubmitted] = useState(false);
    const [summary, setSummary] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [title, setTitle] = useState("");

    return (
        <div id="summarizer">
            <Logout />
            <HistoryBar 
                setSubmitted={setSubmitted}
                setSummary={setSummary}
                expanded={expanded}
                setExpanded={setExpanded}
                setTitle={setTitle}
            />
            <ActiveSummary 
                submitted={submitted}
                setSubmitted={setSubmitted}
                summary={summary}
                setSummary={setSummary}
                expanded={expanded}
                title={title}
                setTitle={setTitle}
            />
        </div>
    );
};

export default Summarizer;