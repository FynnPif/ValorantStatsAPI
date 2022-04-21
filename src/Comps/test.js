import React, { Component } from 'react';
const valorantAPI = require('unofficial-valorant-api');


class Test extends Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }


    fetchAccount(name, tag) {

        const acc = valorantAPI.getAccount(name, tag)
        return(acc)
    }
    render(){
        return(
            <div>
                <h1>{this.fetchAccount("Luna", "BISH")}</h1>
            </div>
        )
    }

 

    
    //Do something with the data, for an example send it as a Discord Embed into your Discord
}



export default Test