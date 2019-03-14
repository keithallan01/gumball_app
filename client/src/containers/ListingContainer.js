import React from "react";
import ListingTable from "../components/listingComponets/ListingTable";
import AddListingForm from '../components/listingComponets/AddListingForm';
import ListingSearchContainer from '../components/listingComponets/ListingSearchComponent';

class ListingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      listings: [],
      matches: []
    };
  }

  render() {
    return (
      <div>
        <div>
          <ListingSearchContainer handleListingSearch={this.handleListingSearch} />
          <h2>Listings</h2>
        </div>
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
      .then(response => fetch("http://localhost:8080/listings/top")
        .then(res => res.json())
        .then(listings => this.setState({ listings: listings })))
      .catch(error => console.error("Error:", error));
  };

  handleUpdateListing = (id, data) => {
    fetch("http://localhost:8080/listings/" + id, {
      method: "PATCH", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => fetch("http://localhost:8080/listings/top")
        .then(res => res.json())
        .then(listings => this.setState({ listings: listings })))
      .catch(error => console.error("Error:", error));
  };


  handleDeleteListing = id => {
    console.log('delete function called')
    fetch("http://localhost:8080/listings/" + id, {
      method: "DELETE", // or 'PUT'
      body: JSON.stringify(id), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.text())
      .then(res => fetch("http://localhost:8080/listings/top")
        .then(res => res.json())
        .then(listings => this.setState({ listings: listings })))
      .catch(error => console.error("Error:", error));

  };

  handleListingSearch = data => {

    let lowerCaseInput = data.toLowerCase();
    for (let i = 0; i < this.state.listings.length; i++) {
      const listing = this.state.listings[i];
      if ((listing.item.toLowerCase().includes(lowerCaseInput))
        ||
        (listing.description.toLowerCase().includes(lowerCaseInput))
        ||
        (listing.category.toLowerCase().includes(lowerCaseInput))) {
        this.state.matches.push(this.state.listings[i])
      }
    }
    this.setState({ listings: this.state.matches });
  }
}

export default ListingContainer;
