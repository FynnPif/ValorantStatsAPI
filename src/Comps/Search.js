import { getByDisplayValue } from '@testing-library/react';
import React, { Component } from 'react';
import styles from './Search.module.css';
const valorantAPI = require('unofficial-valorant-api');

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accountName:"",
            tag:"",
            region:"",
            output: []
        }
    }

    displayAccountInfo = () => {
        const acc = valorantAPI.getAccount(this.state.accountName, this.state.tag)
        acc.then(value => {
            this.setState({region:value.data.region})
            let output = this.state.output
            output.push(value.data.name, value.data.tag)
            this.setState({
                output : output
            })

        })
        return (console.log(acc))
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

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.search}>
                    <input className={styles.name} type="text" value={this.state.accountName} onChange={this.handleChange}></input>
                    <input className={styles.tag} type="text" value={this.state.tag} onChange={this.handleChange2}></input>
                    <button className={styles.button_design} onClick={this.displayAccountInfo}>SEARCH</button>
                </div>
                <select className={styles.rgn} name="region" id="rgn">
                    <option value="EUW">EUW</option>
                    <option value="NA">NA</option>
                </select>
                <div>
                    <output >{this.state.output}</output>
                </div>
            </div>

        );
    }
}

export default Search;