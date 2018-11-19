import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'
import AttractionsContainer from './AttractionsContainer'

class App extends Component {


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className="appHeader">Weekend Away</h1>
        <Navbar />
        <AttractionsContainer />
      </div>
    );
  }
}

export default App;
