import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducer/RootReducer";
import App from './App';

const store = createStore(rootReducer,applyMiddleware(thunk))
const AppRedux = () => (
    <Provider store = {store}>
        <App/>
    </Provider>
)
render(<AppRedux />, document.getElementById('root'));
