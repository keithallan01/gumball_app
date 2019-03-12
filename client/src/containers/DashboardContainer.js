import React, { Component } from "react";
import TopPicks from "../components/dashboardComponents/TopPicks";
import PickOfTheDay from "../components/dashboardComponents/PickOfTheDay";
class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
          <TopPicks/>
          <PickOfTheDay />
      </div>
    );
  }
} 

export default DashboardContainer;
