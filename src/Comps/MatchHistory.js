import React, { Component } from 'react';
const ValorantAPI = require("unofficial-valorant-api")

class GetMatches extends Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    async fetchMatches (region, name, tag, size, mode, map) {
        const matches = ValorantAPI.getMatches(region, name, tag, size, mode, map)
        matches.then(value => {
            console.log(value.data);
         })
    }
    
    
    render() {
        return(
            <div>
                <h1>{console.log(this.fetchMatches("eu", "spiege", "999", "3", "deathmatch", "haven"))}</h1>
            </div>
        )
    }
}

export default GetMatches;