import React from "react";
import CardListing from "./CardListing";

const PickOfTheDay = props => {
  return (
    <div className="listing-box">
      <h2>Current Listing View</h2>
      <ul>
        <CardListing listings={props.listings} handleListingClick={props.handleListingClick}/>
      </ul>
    </div>
  );
};

export default PickOfTheDay;


