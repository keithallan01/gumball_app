import React from "react";
import CardTopListing from "./CardTopListing";

const TopPicks = () => {
  return (
    <div className="top-listing">
      <h2>Top picks</h2>
      <ul >
        <li>
          <CardTopListing/>
        </li>
        <li>
          <CardTopListing/>
        </li>
        <li>
          <CardTopListing/>
        </li>
        <li>
          <CardTopListing/>
        </li>
        <li>
          <CardTopListing/>
        </li>
        <li>
          <CardTopListing/>
        </li>
      </ul>
    </div>
  );
};

export default TopPicks;
