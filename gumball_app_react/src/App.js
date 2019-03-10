import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LstingContainer from "./containers/ListingContainer";
import DashboardContainer from './containers/DashboardContainer'
import CustomerContainer from "./containers/CustomerContainer";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={DashboardContainer} />
            <Route path="/PostanAd" component={LstingContainer} />
            <Route path="/customer" component={CustomerContainer} />
            <Route component={ErrorPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
