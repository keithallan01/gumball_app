import React from "react";
import CardListing from "./CardListing";

const PickOfTheDay = () => {
  return (
    <div className="listing-box">
      <h2>Pick Of The Day</h2>
      <ul>
       <li> <CardListing /></li>
       <li> <CardListing /></li>
       <li> <CardListing /></li>
       <li> <CardListing /></li>
       <li> <CardListing /></li>
       <li> <CardListing /></li>
       <li> <CardListing /></li>
     
      </ul>
    </div>
  );
};

export default PickOfTheDay;

 
