import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";import LstingContainer from "./containers/ListingContainer";
import CustomerContainer from "./containers/CustomerContainer";
import Home from './components/Home'
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component= {Home}/>
          <Route path="/customer" component={CustomerContainer} />
          {/* <CustomerContainer/> */}
          {/* <LstingContainer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
