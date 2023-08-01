import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.scss'
import { Store } from './Store/Store.js'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)