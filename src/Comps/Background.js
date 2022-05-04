import React, { Component } from "react"
import styles from './Background.module.css'

export default class Background extends Component{
  render(){
    return(
      <div className={styles.background}>
        <img id={styles.image} src='./Background.jpg'></img>
      </div>

    )
  }
}