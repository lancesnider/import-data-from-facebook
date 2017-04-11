import React, { Component } from 'react'

class DataFromFacebook extends Component {
  render () {
    return (
      <ul>
        <li>Name: {this.props.facebookData.name}</li>
        <li>Email: {this.props.facebookData.email}</li>
      </ul>
    )
  }
}

export default DataFromFacebook
