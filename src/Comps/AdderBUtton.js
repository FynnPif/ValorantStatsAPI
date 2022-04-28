import React, { Component } from 'react';

class AdderBUtton extends Component {
    constructor(props){
        super(props)
        this.state = {
            accountName:"",
            tag:""
        }
    }

    

    render() { 
        return (
            <button onClick >SEARCH</button>
            );
    }
}
 
export default AdderBUtton;