import React from "react";
import CardListingComponet from "./CardListingComponet";

const ListingBoxComponet = () => {
  return (
    <div className="listing-box">
      <h2>Update Listing</h2>
      <ul>
       <li > <CardListingComponet /></li>
       <li > <CardListingComponet /></li>
       <li> <CardListingComponet /></li>
       <li> <CardListingComponet /></li>
       <li> <CardListingComponet /></li>
       <li> <CardListingComponet /></li>
       <li> <CardListingComponet /></li>
     
      </ul>
    </div>
  );
};

export default ListingBoxComponet;
