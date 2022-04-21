import React, { Component } from 'react';
const valorantAPI = require('unofficial-valorant-api');


class Test extends Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }


    async fetchAccount(name, tag) {

        const acc = valorantAPI.getAccount(name, tag)
        acc.then(value => {
           document.write(value.data.name);
        })
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