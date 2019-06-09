import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
// import cats_reducer from './reducers/cats_reducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ &&
  window._REDUX_DEVTOOLS_EXTENSION_(),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
