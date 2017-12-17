import {
	createStore,
	combineReducers
}
from 'redux';
import {
	reducer as formReducer
}
from 'redux-form';
import postReducer from './postReducer';
import imageReducer from './imageReducer';

export default combineReducers({
	post: postReducer,
	image: imageReducer,
	form: formReducer
});