import React from "react";
import { Table } from "reactstrap";
import EditListingForm from "./EditListingForm"

const ListingTable = (props) => {

  const listingDetail = props.listingsArr.map(listing => {

    return (
      <tr key={listing.id}>
        <td>{listing.item}</td>
        <td>{listing.description}</td>
        <td>{listing.category}</td>
        <td>{listing.askingPrice}</td>
        <td>{listing.searchCounter}</td>
        <td>
          <EditListingForm
            listing={listing}
            onListingUpdate={props.onListingUpdate}
          />
        </td>
        <td>
          <button
            className="btn-danger"
            onClick={() => props.onListingDelete(listing.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="listing-info container">
      <Table className="table table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>No. Views</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>{listingDetail}</tbody>
      </Table>
    </div>
  );

}

export default ListingTable; 