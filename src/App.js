import './App.css';
import Test from './Comps/test';
import GetMMR from './Comps/getMMR'
import Search from './Comps/Search';
import React, { Component } from 'react';
import MatchHistory from './Comps/MatchHistory';

  class App extends Component {
    state = {}

    render() {

      return (
        <div className="App">
          <GetMMR />
          <MatchHistory />
          <Search/>
          <img id='image' src='./Background.jpg'></img>
        </div>
      );
    }
  }

export default App;
