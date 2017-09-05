import {
	applyMiddleware,
	createStore
}
from 'redux';
import reducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";

export default createStore(reducer, applyMiddleware(promise(), thunk, logger()));