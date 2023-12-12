import React from "react";

const NewSummaryButton = ({setExpanded}) => {

    const newSummary = () => {
        setExpanded(false);
        window.location.reload();
    }

    return (
        <div 
            className="history-button"
            onClick={newSummary}>
            <p>New Summary</p>
        </div>
    );
}

export default NewSummaryButton;