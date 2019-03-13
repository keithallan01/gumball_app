import React, { Component } from "react";
import TopPicks from "../components/dashboardComponents/TopPicks";
import PickOfTheDay from "../components/dashboardComponents/PickOfTheDay";
import SearchBar from '../components/dashboardComponents/SearchBar';
import CategoryContainer from '../components/dashboardComponents/CategoryComponent';
import ListingSearchContainer from '../components/listingComponets/ListingSearchComponent';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }
  render() {
    if (this.state.listings.length === 0) return null;
    return (
      <div>
        <ListingSearchContainer handleListingSearch={this.handleListingSearch}/>
        <CategoryContainer />
        <TopPicks listings={this.state.listings} />
        <PickOfTheDay listings={this.state.listings}/>
      </div>
    );
  }

  componentDidMount() {
    console.log('did mount')
    fetch("http://localhost:8080/listings")
      .then(res => res.json())
      .then(data => this.setState({ listings: data._embedded.listings }));
  }

}

export default DashboardContainer;
