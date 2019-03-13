import React from "react";

const SearchBar = () => {
  return (
    <div className="search-div">
      <form className="search-form">
        <input type="text" placeholder="Search.." name="search" />
          <i className="fa fa-search" />
      </form>
    </div>
  );
};

export default SearchBar;
