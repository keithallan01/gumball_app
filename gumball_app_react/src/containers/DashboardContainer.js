import React, { Component } from "react";
import TopListingBoxComponet from "../components/dashboardComponents/TopListingBoxComponet";
import ListingBoxComponet from "../components/dashboardComponents/ListingBoxComponet";
class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
          <TopListingBoxComponet/>
          <ListingBoxComponet />
      </div>
    );
  }
} 

export default DashboardContainer;
