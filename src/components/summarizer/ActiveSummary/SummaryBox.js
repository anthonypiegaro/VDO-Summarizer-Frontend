import React from "react";
import TypedText from "../TypedText";

const SummaryBox = ({text}) => {
    return(
        <div id="summary-box">
            <TypedText key={text} text={text} speed={5} />
        </div>
    );
};

export default SummaryBox;