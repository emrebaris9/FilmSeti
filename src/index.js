import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';              // reduxu react içinde kullanabilmek için  
import { BrowserRouter } from 'react-router-dom';   // react router kullanmak için provide ve app da sarmalanmalı

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxPromise(), thunk, logger))     // redux dev tools etkinleştirildi
);

ReactDOM.render(
    <BrowserRouter> 
        <Provider store={store}> 
            <App /> 
        </Provider> 
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
