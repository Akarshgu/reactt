import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
        <div className='classComponent'>
          <h3 style={{padding:"10px"}}>It was made by using Class Component</h3>
          <p className='externalcss'>This is done by using external CSS</p>
          <p style={{color:"white"}}>This is done by using internal CSS</p>
          </div>
    )
  }
}
