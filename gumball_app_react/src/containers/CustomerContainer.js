import React from "react";
import CustomerTable from "../components/customerComponets/CustomerTable";
import AddCustomerForm from "../components/customerComponets/AddCustomerForm";

class CustomerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Customers</h1>
        <AddCustomerForm
          onCustomerSubmit={this.handleNewCustomerSubmit}
        />
        <CustomerTable
          customersArr={this.state.customers}
          onCustomerUpdate={this.handleUpdateCustomer}
          onCustomerDelete={this.handleDeleteCustomer}
        />
      </div>
    );
  }

  componentDidMount() {
    const url = "http://localhost:8080/customers";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ customers: data._embedded.customers }));
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
      .then(response => fetch("http://localhost:8080/customers")
        .then(res => res.json())
        .then(data => this.setState({ customers: data._embedded.customers })))
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
    .then(response => fetch("http://localhost:8080/customers")
      .then(res => res.json())
      .then(data => this.setState({ customers: data._embedded.customers })))
      .catch(error => console.error("Error:", error));
  };


  handleDeleteCustomer = data => {
    console.log('delete function called')
    fetch("http://localhost:8080/customers/" + data, {
      method: "DELETE", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.text())
    .then(res => fetch("http://localhost:8080/customers")
    .then(res => res.json())
    .then(data => this.setState({ customers: data._embedded.customers })))
    .catch(error => console.error("Error:", error));

  };

}

export default CustomerContainer;