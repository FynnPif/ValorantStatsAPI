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
        for (let i=0;i<=5;i++){
            matches.then(element => {
            console.log(element.data[i].metadata.map)
        });
    }
    }
    
    
    render() {
        return(
            <div>
                <h1>{console.log(this.fetchMatches("eu", "spiege", "999"))}</h1>
            </div>
        )
    }
}

export default GetMatches;