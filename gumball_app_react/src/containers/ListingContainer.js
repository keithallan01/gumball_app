import React from 'react';
import DetailComponent from '../components/DetailComponent';
import SearchComponent from '../components/SearchComponent';

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
            <div className="listing-container">
                <h1>Listings</h1> 
                <SearchComponent />
                <DetailComponent listingsArr={this.state.listings}/>
            </div>
            
        );
    }
}
 
export default ListingContainer;