import React from "react";
import { Table } from "reactstrap";
import EditCustomerForm from "./EditCustomerForm";

const CustomerTable = (props) => {

  const customerDetail = props.customersArr.map(customer => {
    return (
      <tr key={customer.id}>
        <td>{customer.firstName} {customer.lastName}</td>
        <td>{customer.town}</td>
        <td>{customer.address}</td>
        <td><a href={customer.emailAddress}>{customer.emailAddress}</a></td>
        <td>{customer.telephoneNumber}</td>
        <td>
          <EditCustomerForm
            customer={customer}
            onCustomerUpdate={props.onCustomerUpdate}
          />
        </td>
        <td>
          <button
            className="btn-danger"
            onClick={() => props.onCustomerDelete(customer.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="customer-info container">
      <Table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Town</th>
            <th>Address</th>
            <th>Email</th>
            <th>Tel No.</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>{customerDetail}</tbody>
      </Table>
    </div>
  );

}

export default CustomerTable; 