import './App.css';
import GetMMR from './Comps/getMMR'
import Search from './Comps/Search';
import React, { Component } from 'react';
import AccountInfo from './Comps/AccountInfo';
const valorantAPI = require('unofficial-valorant-api');

  class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
          accName: this.props.accountName,
          accTag: this.props.tag,
          region:"",
          output: []
      }
  }



    render() {

      return (
        <div className="App">
          <Search/>
          <AccountInfo />
          <img id='image' src='./Background.jpg'></img>
        </div>
      );
    }
  }

export default App;
