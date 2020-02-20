import React from "react";
import "./Header.css";

const SearchBar = () => {
    return (
        <div className="search-bar-wrapper">
        <div className="image-wrapper">
            <i className="fab fa-instagram" />
        </div>
        <form className="search-form">
            <input type="text" placeholder="Search"/>
        </form>
      </div>
    );
};

export default SearchBar;