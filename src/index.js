import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers/index'

const INITIAL_STATE = {
  _Game: {
    game_on: false
  },
  _Play: {
    active_panel: null
  },
  _Setup: {
    display: '',
    strict: false,
    start_reset: false
  }
}

let store = createStore(
  rootReducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__
  &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// registerServiceWorker()
