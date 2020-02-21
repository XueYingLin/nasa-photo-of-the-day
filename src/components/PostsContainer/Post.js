import React, { useState } from "react";
import PageGuide from "./PageGuide";
import styled from "styled-components";

const Image = styled.img `
  width: 80%;
  object-fit: scale;
`;
const Frame = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;
const Explanation = styled.div `
  margin: 0 10%;
`;
const Post = props => {
   
    return (
        <div>
        <div className="APOD">
            <Image src={props.url} alt="image"></Image>
            <Frame>
              <p>Copyright: {props.copyright}</p>
              <p>date: {props.date}</p>
              <Explanation>explanation: {props.explanation}</Explanation>
            </Frame>
        </div>

        <PageGuide />
        </div>

    )
    
}

export default Post;