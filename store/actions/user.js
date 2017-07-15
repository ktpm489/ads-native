export const FETCH_USER_SUCCESS = 'fetch_user_success';
export const FETCH_USER_FAILURE = 'fetch_user_failure';
export const SAVE_USER_SUCCESS = 'save_user_success';
export const SAVE_USER_FAILURE = 'save_user_failure';

import {User, Team} from '../../db';
import {generateLeague} from './generators';
import {setTeams} from './teams';
import {newGame} from './game';

export const fetchUser = () => {
    return dispatch => {
        const user = User.get();
        const teams = Team.getAll();
        if (user) {
            dispatch(fetchSuccess(user));
            dispatch(setTeams(teams));
        } else {
            dispatch(fetchFailure())
        }
    }
};

export const saveUser = user => {
    return dispatch => {
        if (User.save(user)) {
            dispatch(saveSuccess(user));
            dispatch(newGame(user));
            dispatch(generateLeague())
        } else {
            return dispatch(saveFailure());
        }
    }
};

const fetchSuccess = data => {
    return {
        type: FETCH_USER_SUCCESS,
        data
    }
};

const fetchFailure = () => {
    return {
        type: FETCH_USER_FAILURE
    }
};

const saveSuccess = data => {
    return {
        type: SAVE_USER_SUCCESS,
        data
    }
};

const saveFailure = () => {
    return {
        type: SAVE_USER_FAILURE
    }
};