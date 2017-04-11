import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from './reducers'
import App from './components/App'
import './index.css'

const initialState = {
  facebookData: {
    name: 'Nada',
    email: 'nadie@example.com',
    phone: '',
    address: '1234 My St., SLC, UT'
  }
}

const store = createStore(allReducers, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
