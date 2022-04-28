import { getByDisplayValue } from '@testing-library/react';
import React, { Component } from 'react';
import styles from './Search.module.css';
const valorantAPI = require('unofficial-valorant-api');

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            accountName:"",
            tag:""
        }
    }

    displayAccountInfo = () =>{
        const acc = valorantAPI.getAccount(this.state.accountName, this.state.tag)
        return(console.log(acc))
    }
    

    handleChange = (event) =>{
        this.setState({
            accountName : event.target.value
        })
    }
    handleChange2 = (event) =>{
        this.setState({
            tag : event.target.value
        })
    }

    render() { 
        return (
            <div className={styles.search}>
            <input type="text" value = {this.state.accountName} onChange={this.handleChange}></input> 
            <input type="text" value = {this.state.tag} onChange={this.handleChange2} className={styles.bar2}></input> 
            <button className={styles.button_design} onClick={this.displayAccountInfo}>SEARCH</button>
            </div>
            );
    }
}
 
export default Search;