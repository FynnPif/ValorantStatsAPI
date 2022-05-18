import { getByDisplayValue } from '@testing-library/react';
import React, { Component, useState } from 'react';
import styles from './Search.module.css';
import AccountInfo from './AccountInfo';
const valorantAPI = require('unofficial-valorant-api');

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accountName:"",
            trueAccountName:"",
            tag:"",
            region:"",
            output: []
        }
        
    }



    handleChange = (event) => {
        this.setState({
            accountName: event.target.value
        })
    }
    handleChange2 = (event) => {
        this.setState({
            tag: event.target.value
        })
    }
    getInfo = () => {
        const acc = valorantAPI.getAccount(this.state.accountName, this.state.tag)
        acc.then(value => {
            this.setState({
                region: value.data.region,
                
            })
        })
        return (console.log(acc))
      }

    setaccountInfo = ( ) => {
        this.getInfo();
        this.setState({
            trueAccountName: this.state.accountName
        })
    }

    giveInfo = () => {
        const [accName, setName ] = useState('')
        setName( accName = this.state.accountName)
    }

    giveName = () =>{
        return this.state.trueAccountName
    }

    giveRegion = () => {
        return this.state.region
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.accountName} onChange={this.handleChange}></input>
                <input type="text" value={this.state.tag} onChange={this.handleChange2}></input>
                <select name="region" id="rgn">
                    <option value="EUW">EUW</option>
                    <option value="NA">NA</option>
                </select>
                <button onClick={this.setaccountInfo}>SEARCH</button>
                <div>
                    <AccountInfo giveName={this.giveName()} giveRegion={this.giveRegion()}></AccountInfo>
                    
                    <output >
                    </output>
                </div>
            </div>

        );
    }
}

export default Search;