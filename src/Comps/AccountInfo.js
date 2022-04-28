import React, { Component } from 'react';
const valorantAPI = require('unofficial-valorant-api');


class Test extends Component {


    render(){
        return(
            <div>
                <div>{this.props.accountName}</div>
            </div>
        )
    }
}



export default Test