import React from "react";
import CardTopListing from "./CardTopListing";

const TopPicks = props => {
  
    return(
      <div className = "top-listing" >
        <h2>Top picks</h2>
        <ul className="top-picks-ul">
            <CardTopListing listings={props.listings}/>
        </ul>
      </div>
    );

  }

export default TopPicks;
