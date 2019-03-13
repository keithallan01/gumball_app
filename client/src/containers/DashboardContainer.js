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
      listings: [],
      matches: []
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

  handleListingSearch = data => {

    let lowerCaseInput = data.toLowerCase();
        for (let i = 0; i < this.state.listings.length; i++){
        const listing = this.state.listings[i];
        if ((listing.item.toLowerCase().includes(lowerCaseInput))
        ||
        (listing.description.toLowerCase().includes(lowerCaseInput))
        ||
        (listing.category.toLowerCase().includes(lowerCaseInput))){
          this.state.matches.push(this.state.listings[i])
        }
      }
    this.setState({ listings: this.state.matches});
  }

}

export default DashboardContainer;
