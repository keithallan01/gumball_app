import React from "react";
import CustomerTable from "../components/customerComponents/CustomerTable";
import AddCustomerForm from "../components/customerComponents/AddCustomerForm";
import CustomerSearchComponent from "../components/customerComponents/CustomerSearchComponent";

class CustomerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      matches: []
    };
  }

  render() {
    return (
      <div>
        <h1>Customers</h1>
        <CustomerSearchComponent handleCustomerSearch={this.handleCustomerSearch}/>
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

  handleCustomerSearch = data => {
    let lowerCaseInput = data.toLowerCase();
        for (let i = 0; i < this.state.customers.length; i++){
        const customer = this.state.customers[i];
        if ((customer.firstName.toLowerCase().includes(lowerCaseInput))
        ||
        (customer.lastName.toLowerCase().includes(lowerCaseInput))
        ||
        (customer.town.toLowerCase().includes(lowerCaseInput))
        ||
        (customer.address.toLowerCase().includes(lowerCaseInput))
        ||
        (customer.emailAddress.toLowerCase().includes(lowerCaseInput))
        ||
        (customer.telephoneNumber.toLowerCase().includes(lowerCaseInput))){
          this.state.matches.push(this.state.customers[i])
        }
      }
    console.log(this.state.matches);
  }



}

export default CustomerContainer;