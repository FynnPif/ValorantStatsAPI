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
            trueTag:"",
            tag:"",
            lvl:"",
            pic:"",
            region:"",
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
                lvl: value.data.account_level,
                trueAccountName: value.data.name,
                trueTag: value.data.tag,
                pic: value.data.card.small
            })
        })
        return (console.log(acc))
      }

    setAccountInfo = () => {
        this.getInfo();
    }

    giveName = () =>{
        return this.state.trueAccountName
    }

    giveRegion = () => {
        return this.state.region
    }

    giveLevel = () => {
        return this.state.lvl
    }

    givePic = () => {
        this.fetchMatches();
        return this.state.pic
    }


    fetchMatches = () => {
        const matches = valorantAPI.getMatches(this.state.region, this.state.accountName, this.state.tag)
        for (let i=0;i<=5;i++){
            matches.then(element => {
            console.log(element.data[i].metadata.map)
        });
    }
}



    render() {
        return (
            <div className={styles.container}>
                <div className={styles.search}>
                    <input className={styles.name} type="text" value={this.state.accountName} onChange={this.handleChange}></input>
                    <input className={styles.tag} type="text" value={this.state.tag} onChange={this.handleChange2}></input>
                    <button className={styles.button_design} onClick={this.setAccountInfo}>SEARCH</button>
                </div>
                <select className={styles.rgn} name="region" id="rgn">
                    <option value="EUW">EUW</option>
                    <option value="NA">NA</option>
                </select>
                <div>
                    <AccountInfo giveName={this.giveName()} giveRegion={this.giveRegion()} giveLevel={this.giveLevel()} givePic={this.givePic()}></AccountInfo>
            
                    <output >
                    </output>
                </div>
            </div>

        );
    }
}

export default Search;