import React, { useState } from "react";
// import "./PostPage.css";
import styled from "styled-components";
import { Button } from 'reactstrap';

const Guide = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
`;
const PageGuide = props => {
    return (
        <Guide>
            <Button color="info">Previous</Button>
            <Button color="info">Next</Button>
        </Guide>
    );
};

export default PageGuide;