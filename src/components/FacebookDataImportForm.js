import React, { Component } from 'react'

class FacebookDataImportForm extends Component {
  render () {
    return (
      <div>
        <p>Import your data from your Facebook page</p>
        <button onMouseDown={() => this.props.clickLogin()}>Log Into Facebook</button>
      </div>
    )
  }
}

export default FacebookDataImportForm
