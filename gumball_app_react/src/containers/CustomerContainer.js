import React from 'react';
import DetailComponent from '../components/DetailComponent'
import { Url } from 'url';

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
          .then(data =>  this.setState({ customers: data._embedded.customers}));
      }

     


    render() { 
        return (  
            <div>
        <DetailComponent customersArr={this.state.customers}/>
        <h1>CustomerContainer</h1> 
        </div>
        );
    }
}
 
export default CustomerContainer;