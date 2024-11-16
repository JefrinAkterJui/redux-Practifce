import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import myStore from './store.js'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={myStore}>

    <App />
  </Provider>
)
