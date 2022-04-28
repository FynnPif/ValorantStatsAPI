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
                <h1>{document.write(this.fetchMMR("v1", "eu", "Henrik3", "EUW3"))}</h1>
            </div>
        )
    }
}

export default GetMMR;