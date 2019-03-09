import React, { Component } from 'react';
import ListingContainer from './containers/ListingContainer'
import CustomerContainer from './containers/CustomerContainer'
import './App.css';
import Header from './components/Layout/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Gumball App</h1> */}
        <Header />
        <CustomerContainer />
        <ListingContainer />
      </div>
    );
  }
}

export default App;


