import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/user';
import teams from './reducers/teams';


const reducers = combineReducers({
    user,
    teams
});


const middlewares = [thunk];
export const store = compose(
    applyMiddleware(...middlewares)
)(createStore)(reducers);