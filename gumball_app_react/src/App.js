import React, { Component } from 'react';
import LstingContainer from './containers/ListingContainer'
import CustomerContainer from './containers/CustomerContainer'
import './App.css';
import Header from './components/Layout/Header'
import SearchComponent from './components/SearchComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Gumball App</h1> */}
        <Header />
        <CustomerContainer />
        <LstingContainer />
      </div>
    );
  }
}

export default App;


