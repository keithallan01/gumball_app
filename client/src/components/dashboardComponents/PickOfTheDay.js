import React from "react";
import CardListing from "./CardListing";

const PickOfTheDay = props => {
  return (
    <div className="listing-box">
      <h2>Pick Of The Day</h2>
      <ul>
        <CardListing listings={props.listings} />
      </ul>
    </div>
  );
};

export default PickOfTheDay;


