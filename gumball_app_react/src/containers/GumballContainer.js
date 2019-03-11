import React from "react";
import CustomerContainer from "./CustomerContainer";
import ListingContainer from "./ListingContainer";

class GumballContainer extends React.Component {
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
        <CustomerContainer
          customers={this.state.customers}
          onCustomerSubmit={this.handleNewCustomerSubmit}
          onCustomerUpdate={this.handleUpdateCustomer}
          onCustomerDelete={this.handleDeleteCustomer}
        />
        <ListingContainer
          customers={this.state.customers}
          listings={this.state.listings}
          onListingSubmit={this.handleNewListingSubmit}
          onListingUpdate={this.handleUpdateListing}
          onListingDelete={this.handleDeleteListing}
        />
      </div>
    );
  }

  componentDidMount() {
      console.log("component did mount")
    fetch("http://localhost:8080/customers")
      .then(res => res.json())
      .then(data => this.setState({ customers: data._embedded.customers }));
        
    
    fetch("http://localhost:8080/listings")
      .then(res => res.json())
      .then(data => this.setState({ listings: data._embedded.listings }));
  }

  handleNewCustomerSubmit = data => {
    fetch("http://localhost:8080/customers", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response =>
        fetch("http://localhost:8080/customers")
          .then(res => res.json())
          .then(data => this.setState({ customers: data._embedded.customers }))
      )
      .catch(error => console.error("Error:", error));
  };

  handleUpdateCustomer = data => {
    fetch("http://localhost:8080/customers/" + data.id, {
      method: "PATCH", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response =>
        fetch("http://localhost:8080/customers")
          .then(res => res.json())
          .then(data => this.setState({ customers: data._embedded.customers }))
      )
      .catch(error => console.error("Error:", error));
  };

  handleDeleteCustomer = data => {
    console.log("delete function called");
    fetch("http://localhost:8080/customers/" + data, {
      method: "DELETE", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.text())
      .then(res =>
        fetch("http://localhost:8080/customers")
          .then(res => res.json())
          .then(data => this.setState({ customers: data._embedded.customers }))
      )
      .catch(error => console.error("Error:", error));
  };

  handleNewListingSubmit = data => {
    console.log(data);
    fetch("http://localhost:8080/listings", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response =>
        fetch("http://localhost:8080/listings")
          .then(res => res.json())
          .then(data => this.setState({ listings: data._embedded.listings }))
      )
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
      .then(response =>
        fetch("http://localhost:8080/listings")
          .then(res => res.json())
          .then(data => this.setState({ listings: data._embedded.listings }))
      )
      .catch(error => console.error("Error:", error));
  };

  handleDeleteListing = data => {
    console.log("delete function called");
    fetch("http://localhost:8080/listings/" + data, {
      method: "DELETE", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.text())
      .then(res =>
        fetch("http://localhost:8080/listings")
          .then(res => res.json())
          .then(data => this.setState({ listings: data._embedded.listings }))
      )
      .catch(error => console.error("Error:", error));
  };
}

export default GumballContainer;
