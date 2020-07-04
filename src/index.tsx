import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App/App'
import store from './_helpers/store'
import * as serviceWorker from './serviceWorker'

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
