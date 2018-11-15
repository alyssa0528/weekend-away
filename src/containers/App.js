import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="appHeader">Weekend Away</h1>
        <Navbar />
      </div>
    );
  }
}

export default App;
