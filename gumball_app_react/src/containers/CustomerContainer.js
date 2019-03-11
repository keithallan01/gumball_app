import React from "react";
import CustomerTable from "../components/customerComponets/CustomerTable";
import AddCustomerForm from "../components/customerComponets/AddCustomerForm";
const CustomerContainer = props => {
  return (
    <div>
      <h1>Customer Container</h1>
      <AddCustomerForm 
        customersArr={props.customers}
        onCustomerSubmit={props.onCustomerSubmit} 
      />
      <CustomerTable
        customersArr={props.customers}
        onCustomerUpdate={props.onCustomerUpdate}
        onCustomerDelete={props.onCustomerDelete}
      />
    </div>
  );
};

export default CustomerContainer;