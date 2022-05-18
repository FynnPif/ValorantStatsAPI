import React, { Component } from 'react';
import Search from './Search';
const valorantAPI = require('unofficial-valorant-api');


class AccountInfo extends Component {

    render(){
        return(
            <div>
                <div>{this.props.giveName}</div>
                <div>{this.props.giveRegion}</div>
            </div>
            
        )
    }
}



export default AccountInfo