import React from "react";
import ListingTable from "../components/listingComponets/ListingTable";
import AddListingForm from "../components/listingComponets/AddListingForm";
const ListingContainer = props => {
  console.log(props)
  return (
    <div>
      <h1>Listing Container</h1>
      <AddListingForm 
        customersArr={props.customers}
        onListingSubmit={props.onListingSubmit} 
      />
      <ListingTable
        listingsArr={props.listings}
        onListingUpdate={props.onListingUpdate}
        onListingDelete={props.onListingDelete}
      />
    </div>
  );
};

export default ListingContainer;
