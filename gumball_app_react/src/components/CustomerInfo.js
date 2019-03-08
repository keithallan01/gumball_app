import React from 'react';


const CustomerInfo = (props) => {

    const customerDetail = props.customersArr.map((customer) => {
        return (
            <tr key={customer.id}>
                <td>{customer.firstName} {" "} {customer.lastName}</td>
                <td>{customer.town}</td>
                <td>{customer.address}</td>
                <td><a href={customer.emailAddress}>{customer.emailAddress}</a></td>
                <td>{customer.telephoneNumber}</td>
                <td><button className="btn-warning">Edit</button></td>
                <td><button className="btn-danger">Delete</button></td>
            </tr>
        )
    })

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Town</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Tel No.</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {customerDetail}
                </tbody>
            </table>
        </div>

    );
}

export default CustomerInfo;