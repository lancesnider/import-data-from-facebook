import React, { Component } from 'react'
// import FacebookDataImportForm from './FacebookDataImportForm'
import DataFromFacebook from '../containers/dataFromFacebook'
import FacebookDataImportForm from '../containers/facebookDataImportForm'
import '../assets/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <FacebookDataImportForm />
        </div>
        <DataFromFacebook />
      </div>
    )
  }
}

export default App
