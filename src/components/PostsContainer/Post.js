import React, { useState } from "react";
import PageGuide from "./PageGuide";
// import LikeSection from "./LikeSection";
import "./PostPage.css";

const Post = props => {
   
    return (
        <div>
        <div className="APOD">
            <img src={props.url} alt="image"></img>
            <p>Copyright: {props.copyright}</p>
            <p>date: {props.date}</p>
            <p>explanation: {props.explanation}</p>
            
        </div>
        <PageGuide />
        </div>

    )
    // <LikeSection like={likes} increatmentLikes = {increatmentLikes} />
}

export default Post;