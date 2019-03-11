import React from "react";
import CardTopHotComponet from "./CardTopListingComponet";

const TopListingBoxComponet = () => {
  return (
    <div className="top-listing">
      <h2>Top picks</h2>
      <ul >
        <li>
          <CardTopHotComponet />
        </li>
        <li>
          <CardTopHotComponet />
        </li>
        <li>
          <CardTopHotComponet />
        </li>
        <li>
          <CardTopHotComponet />
        </li>
      </ul>
    </div>
  );
};

export default TopListingBoxComponet;
