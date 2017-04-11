import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

class FacebookDataImportForm extends Component {
  render () {
    const responseFacebook = (response) => {
      console.log(response)
      this.props.recieveFBData(response)
    }
    return (
      <div>
        <p>Import your data from your Facebook page</p>
        <FacebookLogin
          appId='527969967373665'
          fields='name,email,picture'
          callback={responseFacebook} />
      </div>
    )
  }
}

export default FacebookDataImportForm
