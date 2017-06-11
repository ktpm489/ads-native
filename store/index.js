import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/user';


const reducers = combineReducers({
    user
});


const middlewares = [thunk];
export const store = compose(
    applyMiddleware(...middlewares)
)(createStore)(reducers);