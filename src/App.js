import './App.css';
import Test from './Comps/test';
import GetMMR from './Comps/getMMR'
import Search from './Comps/Search';
import React, { Component } from 'react';

  class App extends Component {
    state = {}

    render() {

      return (
        <div className="App">
          <GetMMR />
          <Search/>
          <img id='image' src='./Background.jpg'></img>
        </div>
      );
    }
  }

export default App;
