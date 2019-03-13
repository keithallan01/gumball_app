import React from "react";

const CategoryComponent = (props) => {


  


  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul >
        <li>
        <div className="categories-links" onClick={() => props.onClickCategory("Automotive")}>Automotive</div>
        </li>
        <div className="categories-links" onClick={() => props.onClickCategory("Books")}>Books</div>
        <li>
        <div className="categories-links" onClick={() => props.onClickCategory("Clothing")}>Clothing</div>
        </li>
        <li>
          <div className="categories-links" onClick={() => props.onClickCategory("Computing & Technology")}>Computing and Technology</div>
        </li>
        <li>
        <div className="categories-links" onClick={() => props.onClickCategory("Food & Drink")}>Food and Drink</div>
        </li>
        <li>
        <div className="categories-links" onClick={() => props.onClickCategory("Health & Beauty")}>Health and Beauty</div>
        </li>
        <li>
        <div className="categories-links" onClick={() => props.onClickCategory("Kitchenware")}>Kitchenware</div>
        </li>
        <li>
        <div className="categories-links" onClick={() => props.onClickCategory("Sports & Leisure")}>Sports and Leisure</div>
        </li>
      </ul>
    </div>
  );
};

export default CategoryComponent;