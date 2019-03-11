import React, { Component } from "react";
import CardListingComponet from "./CardListingComponet";

const ListingBoxComponet = () => {
  return (
    <div className="container">
      <h2 className="para-listing">Update Listing</h2>
      <ul className="ul-card">
       <li className="li-card"> <CardListingComponet /></li>
       <li className="li-card"> <CardListingComponet /></li>
       <li className="li-card"> <CardListingComponet /></li>
       <li className="li-card"> <CardListingComponet /></li>
       <li className="li-card"> <CardListingComponet /></li>
       <li className="li-card"> <CardListingComponet /></li>
       <li className="li-card"> <CardListingComponet /></li>
     
      </ul>
    </div>
  );
};

export default ListingBoxComponet;
