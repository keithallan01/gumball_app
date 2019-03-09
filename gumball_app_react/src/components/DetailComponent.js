import React from "react";

const DetailComponent = props => {
  const listingDetail = props.listingsArr.map(listing => {
    return <div key={listing.id}>{listing.item}</div>;
  });

  return <div>{listingDetail}</div>;
};

export default DetailComponent;
