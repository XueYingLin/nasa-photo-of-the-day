import React from "react";
import styled from "styled-components";

const SearchBarLocation = styled.div `
    margin-bottom: 5%;
`; 
const SearchBar = () => {
    return (
        <SearchBarLocation>
        <div className="search-bar-wrapper">
            <div className="image-wrapper">
            </div>
            <form className="search-form">
                <input type="text" placeholder="Search"/>
            </form>
        </div>
      </SearchBarLocation>
    );
};

export default SearchBar;