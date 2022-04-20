import React, { Component } from 'react';

class Test extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            tag:'',
        }
    }
    valorantAPI = require('unofficial-valorant-api');
    
    fetchAccount(name, tag) {
        const acc = this.props.valorantAPI.getAccount(this.state.name, this.state.tag)
        return(acc)
    }
    render(){
        return(
            <div>
                <h1>{console.log(this.fetchAccount("Delflinger", "ZRK"))}</h1>
            </div>
        )
    }

 

    
    //Do something with the data, for an example send it as a Discord Embed into your Discord
}



export default Test