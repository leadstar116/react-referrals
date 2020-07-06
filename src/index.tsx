import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import App from './App/App'
import store from './_helpers/store'
import * as serviceWorker from './serviceWorker'

const persistor = persistStore(store);

render(
  <Provider store={ store }>
    <PersistGate
        persistor={ persistor }
        loading={<div>loading...</div>}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
