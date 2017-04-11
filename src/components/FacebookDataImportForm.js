import React, { Component } from 'react'

class FacebookDataImportForm extends Component {
  render () {
    return (
      <div>
        <p>Import your data from your Facebook page</p>
        <button
          onMouseDown={() => this.props.clickImport()}
        >Import</button>
      </div>
    )
  }
}

export default FacebookDataImportForm
