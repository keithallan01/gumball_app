import React from 'react';
import DetailComponent from '../components/DetailComponent';
<<<<<<< HEAD
import SearchComponent from '../components/SearchComponent';
=======
import ListingInfo from '../components/ListingInfo';
>>>>>>> 9d4107f628a6e662e57f5cf0b52d8aa8c586f4e9

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
                <ListingInfo listingsArr={this.state.listings}/>
            </div>
            
        );
    }
}
 
export default ListingContainer;