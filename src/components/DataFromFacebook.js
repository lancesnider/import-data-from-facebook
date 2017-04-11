import React, { Component } from 'react'

class DataFromFacebook extends Component {
  render () {
    return (
      <ul>
        <li>Name: {this.props.facebookData.name}</li>
        <li>Email: {this.props.facebookData.email}</li>
        <li>Phone: {this.props.facebookData.phone}</li>
        <li>Address: {this.props.facebookData.address}</li>
      </ul>
    )
  }
}

export default DataFromFacebook
