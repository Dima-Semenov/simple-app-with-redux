import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './redux/Reducers/rootReducer';
import { spanFilter } from './redux/middleWare';
import logger from 'redux-logger'

const store = createStore(rootReducer, compose(applyMiddleware(thunk, spanFilter, logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
