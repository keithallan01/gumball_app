import React from "react";

const SearchBar = () => {
  return (
    <div className="search-div">
      <form className="search-form" action="/action_page.php">
        <input type="text" placeholder="Search.." name="search" />
          <i className="fa fa-search" />
      </form>
    </div>
  );
};

export default SearchBar;
