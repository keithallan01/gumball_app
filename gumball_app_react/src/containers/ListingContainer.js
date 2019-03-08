import React from 'react';
import DetailComponent from '../components/DetailComponent';

class ListingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            listings: []
         }
    }

    componentDidMount() {
        const url = "http://localhost:8080/listings";
        fetch(url)
          .then(res => res.json())
          .then(data =>  this.setState({ listings: data._embedded.listings}));
      }

    render() { 
        return ( 
            <div>
                <h1>Listing Container</h1> 
                <DetailComponent listingsArr={this.state.listings}/>
            </div>
            
        );
    }
}
 
export default ListingContainer;