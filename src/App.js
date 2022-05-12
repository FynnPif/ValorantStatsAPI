import './App.css';
import Test from './Comps/test';
import GetMMR from './Comps/getMMR'
import Search from './Comps/Search';
import React, { Component } from 'react';
import Betweenpic from './Comps/Betweenpic';

  class App extends Component {
    state = {}

    render() {

      return (
        <div className="App">
          <Betweenpic/>
          <GetMMR />
          <Search/>
          <img id='image' src='./Background.jpg'></img>
        </div>
      );
    }
  }

export default App;
