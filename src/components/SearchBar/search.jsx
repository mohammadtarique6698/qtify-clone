import React from "react";
import "./search.css";
import { ReactComponent as SVG } from "../../assets/searchIcon.svg";

const SearchBar = ({ placeholderText }) => {
  return (
    <div className="wrapper">
      <input className="searchbar" type="text" placeholder={placeholderText} />
      <div className="rectangle">
        <div className="center">
          <SVG />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;