import React from "react";
import SummaryBox from "./SummaryBox";
import IdInput from "./IdInput";

const ActiveSummary = ({submitted, setSubmitted, summary, setSummary, expanded, title, setTitle}) => {
    const classNames = [
            'active-summary', // Always include a base class
            submitted ? 'sent' : '', // Add 'sent' class if submitted is true
            expanded ? 'expanded' : '', // Add 'expanded' class if expanded is true
        ].filter(Boolean).join(' ');

    return(
        <div id="active-summary" className={classNames}>
            <IdInput 
                submitted={submitted}
                setSubmitted={setSubmitted}
                setSummary={setSummary}
                title={title}
                setTitle={setTitle}
            />
            <SummaryBox text={summary} />
        </div>
    );
};

export default ActiveSummary;