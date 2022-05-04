import React, { Component } from 'react';
const ValorantAPI = require("unofficial-valorant-api")

class GetMMR extends Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    async fetchMMR (version, region, name, tag) {
        const mmr = ValorantAPI.getMMR(version, region, name, tag)
        mmr.then(value => {
            console.log(value.data);
         })
    }
    
    
    render() {
        return(
            <div>
                <h1>{console.log(this.fetchMMR("v1", "eu", "spiege", "999"))}</h1>
            </div>
        )
    }
}

export default GetMMR;