import React, { useState, useEffect } from "react";
import Post from "./Post";
// import "./PostPage.css";
import axios from "axios";

export default function PostPage() {
    const [APOD, setAPOD] = useState([]);
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            console.log(response.data);
            setAPOD(response.data);
        })
        .catch(error => {
            console.log("the data was not return", error);
        })
    }, [])
    return (
        <div className="APOD">

            <Post
           url = {APOD.url}
            copyright= {APOD.copyright}
            date={APOD.date}
            explanation={APOD.explanation}
            />       
                       
        </div>
    )
}

