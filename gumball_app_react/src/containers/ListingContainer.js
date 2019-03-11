import React from 'react';
import DetailComponent from '../components/DetailComponent';
import ListingSearchComponent from '../components/searchComponents/ListingSearchComponent';
import ListingInfo from '../components/ListingInfo';

class ListingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    const url = "http://localhost:8080/listings";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ listings: data._embedded.listings }));
  }

  render() {
    return (
      <div className="listing-container">
        <h1>Listings</h1>
        <ListingSearchComponent listings={this.state.listings} />
        {/* <DetailComponent listingsArr={this.state.listings}/> */}
        <ListingInfo
          listingsArr={this.state.listings}
          onListingSubmit={this.handleNewListingSubmit}
          onListingUpdate={this.handleUpdateListing}
          onListingDelete={this.handleDeleteListing}
        />
      </div>

    );
  }
  handleNewListingSubmit = data => {
    fetch("http://localhost:8080/listings", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  handleUpdateListing = data => {
    fetch("http://localhost:8080/listings/" + data.id, {
      method: "PATCH", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };


  handleDeleteListing = data => {
    fetch("http://localhost:8080/listings/" + data, {
      method: "DELETE", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
  };
}

export default ListingContainer;