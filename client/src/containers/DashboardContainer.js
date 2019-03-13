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
    this.handleSearchByCategory = this.handleSearchByCategory.bind(this)
  }
  render() {
    if (this.state.listings.length === 0) return null;
    return (
      <div>
        <SearchBar />
        <CategoryContainer onClickCategory={this.handleSearchByCategory}/>
        <ListingSearchContainer handleListingSearch={this.handleListingSearch}/>
        <TopPicks listings={this.state.listings} />
        <PickOfTheDay listings={this.state.listings}/>
      </div>
    );
  }

  componentDidMount() {
    fetch("http://localhost:8080/listings")
      .then(res => res.json())
      .then(data => this.setState({ listings: data._embedded.listings }));
  }

  handleSearchByCategory(category) {
    console.log(category)
    fetch("http://localhost:8080/listings/category/" + category)
      .then(res => res.json())
      .then(listings => this.setState({ listings: listings }));

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

