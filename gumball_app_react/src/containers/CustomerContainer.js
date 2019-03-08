import React from 'react';
import { Url } from 'url';
import CustomerInfo from '../components/CustomerInfo';

class CustomerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:8080/customers";
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ customers: data._embedded.customers }));
    }




    render() {
        return (
            <div>
                <h1>Customers</h1>
                <CustomerInfo customersArr={this.state.customers} />
            </div>
        );
    }
}

export default CustomerContainer;