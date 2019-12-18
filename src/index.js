import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import dentalReducer from './reducers/dentalReducer'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

import 'normalize.css/normalize.css'
import '@blueprintjs/core'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(dentalReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider >
  ,
  document.getElementById('root'));
