import React, { Component } from "react";
import TopPicks from "../components/dashboardComponents/TopPicks";
import PickOfTheDay from "../components/dashboardComponents/PickOfTheDay";
import SearchBar from '../components/dashboardComponents/SearchBar';
import CategoryContainer from '../components/dashboardComponents/CategoryComponent'

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
        <SearchBar />
        <CategoryContainer />
        <TopPicks listings={this.state.listings} />
        <PickOfTheDay listings={this.state.listings}/>
      </div>
    );
  }

  componentDidMount() {
    console.log('did mount')
    fetch("http://localhost:8080/listings/top")
      .then(res => res.json())
      .then(listings => this.setState({ listings: listings }));
  }

}

export default DashboardContainer;
