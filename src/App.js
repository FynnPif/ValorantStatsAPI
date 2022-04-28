import logo from './logo.svg';
import './App.css';
import Test from './Comps/test';
import Search from './Comps/Search';
import React, { Component } from 'react';



class App extends Component {
  state = {  } 
  
  render() { 
 


  return (
    <div className="App">
     <Search/>
      <img id='image' src='./Background.jpg'></img>
    </div>
  );
  }
}
export default App;
