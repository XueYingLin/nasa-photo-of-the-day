import React from "react";
import "./Header.css";

const SearchBar = () => {
    return (
        <div className="search-bar-wrapper">
        <div className="image-wrapper">
        </div>
        <form className="search-form">
            <input type="text" placeholder="Search"/>
        </form>
      </div>
    );
};

export default SearchBar;