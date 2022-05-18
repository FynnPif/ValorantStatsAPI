import './App.css';
import GetMMR from './Comps/getMMR'
import Search from './Comps/Search';
import React, { Component } from 'react';
import MatchHistory from './Comps/MatchHistory';
import AccountInfo from './Comps/AccountInfo';

  class App extends Component {
    render() {

      return (
        <div className="App">
          <GetMMR />
          <MatchHistory />
          <Search/>
          <AccountInfo/>
          <img id='image' src='./Background.jpg'></img>
        </div>
      );
    }
  }

export default App;
