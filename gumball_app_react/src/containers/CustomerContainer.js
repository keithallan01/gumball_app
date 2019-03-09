import React from "react";
import CustomerInfo from "../components/CustomerInfo";

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
        <CustomerInfo
          customersArr={this.state.customers}
          onCustomerSubmit={this.handleNewCustomerSubmit}
          onCustomerUpdate={this.handleUpdateCustomer}

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
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  };

  handleUpdateCustomer = data => {
      console.log(data.id)
    fetch("http://localhost:8080/customers/"+ data.id, {
        method: 'PATCH', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  };
}

export default CustomerContainer;
