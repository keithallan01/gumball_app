import React from "react";
import CardTopListing from "./CardTopListing";

const CategoryComponent = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul >
        <li>
          <a href="/listings/automotive">Automotive</a>
        </li><li>
          <a href="/listings/books">Books</a>
        </li>
        <li>
          <a href="/listings/clothing">Clothing</a>
        </li>
        <li>
          <a href="/listings/Computing+&amp;+Technology">Computing and Technology</a>
        </li>
        <li>
          <a href="/listings/Food+&amp;+Drink">Food and Drink</a>
        </li>
        <li>
         <a href="/listings/Health+&amp;+Beauty">Health and Beauty</a>
        </li>
        <li>
          <a href="listings/Kitchenware">Kitchenware</a>
        </li>
        <li>
          <a href="/listings/Sports+&amp;+Leisure">Sports and Leisure</a>
        </li>
      </ul>
    </div>
  );
};

export default CategoryComponent;