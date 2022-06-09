import './App.css';
import GetMMR from './Comps/getMMR'
import Search from './Comps/Search';
import React, { Component } from 'react';
import Betweenpic from './Comps/Betweenpic';
import MatchHistory from './Comps/MatchHistory';
import AccountInfo from './Comps/AccountInfo';

  class App extends Component {
    render() {

      return (
        <div className="App">
          <Betweenpic/>
          <MatchHistory />
          <Search/>
          <AccountInfo/>
        </div>
      );
    }
  }

export default App;
