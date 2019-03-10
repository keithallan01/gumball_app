import React, { Component } from 'react';
import ListingBoxComponet from '../components/dashboardComponents/ListingBoxComponet'

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>Dashboard Container</h1>
            <ListingBoxComponet/> 
            </div>
         );
    }
}
 
export default DashboardContainer;