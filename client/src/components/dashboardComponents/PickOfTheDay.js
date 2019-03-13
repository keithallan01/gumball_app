import React from "react";
import CardListing from "./CardListing";

const PickOfTheDay = props => {
  return (
    <div className="listing-box">
<<<<<<< HEAD
      <h2>Current Listing View</h2>
=======
      <h2>Listings</h2>
>>>>>>> develop
      <ul>
        <CardListing listings={props.listings} handleListingClick={props.handleListingClick}/>
      </ul>
    </div>
  );
};

export default PickOfTheDay;


