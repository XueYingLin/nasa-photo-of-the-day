import React, { useState } from "react";
import "./PostPage.css";
const PageGuide = props => {
    return (
        <div className="guide">
            <div className="previous">
                <p>previous</p>
            </div>
            <div className="next">
                <p>next</p>
            </div>
        </div>
    );
};

export default PageGuide;