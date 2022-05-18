import React, { Component } from "react"
import styles from './Betweenpic.module.css'

export default class Betweenpic extends Component{
  render(){
    return(
      <div className={styles.pic}>
        <img id='image' src='./Valorant pic.png'></img>
      </div>

    )
  }
}