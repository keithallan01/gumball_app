import React from "react";
import ListingTable from "../components/listingComponets/ListingTable";
import AddListingForm from '../components/listingComponets/AddListingForm';
class ListingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      listings: []
    };
  }

  render() {
    return (
      <div>
        <h1>Listing Container</h1>
        <AddListingForm 
        customersArr={this.state.customers}
        onListingSubmit={this.handleNewListingSubmit}
        />
        <ListingTable
          listingsArr={this.state.listings}
          onListingUpdate={this.handleUpdateListing}
          onListingDelete={this.handleDeleteListing}
        />
      </div>
    );
  }

  componentDidMount() {
    fetch("http://localhost:8080/customers")
      .then(res => res.json())
      .then(data => this.setState({ customers: data._embedded.customers }));
        
    
    fetch("http://localhost:8080/listings/top")
      .then(res => res.json())
      .then(listings => this.setState({ listings: listings }));
  }

  handleNewListingSubmit = data => {
    console.log(data)
    fetch("http://localhost:8080/listings", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => fetch("http://localhost:8080/listings")
        .then(res => res.json())
        .then(data => this.setState({ listings: data._embedded.listings })))
        .catch(error => console.error("Error:", error));
  };

  handleUpdateListing = (url, data) => {
    fetch(url, {
      method: "PATCH", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(response => fetch("http://localhost:8080/listings")
      .then(res => res.json())
      .then(data => this.setState({ listings: data._embedded.listings })))
      .catch(error => console.error("Error:", error));
  };


  handleDeleteListing = data => {
    console.log('delete function called')
    console.log(data)
    fetch(data, {
      method: "DELETE", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.text())
    .then(res => fetch("http://localhost:8080/listings")
    .then(res => res.json())
    .then(data => this.setState({ listings: data._embedded.listings })))
    .catch(error => console.error("Error:", error));

  };
}

export default ListingContainer;
