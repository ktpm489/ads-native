import {Actions} from 'react-native-router-flux';
export const FETCH_USER_SUCCESS = 'fetch_user_success';
export const FETCH_USER_FAILURE = 'fetch_user_failure';
export const SAVE_USER_SUCCESS = 'save_user_success';
export const SAVE_USER_FAILURE = 'save_user_failure';

import {User} from '../../db';

export const fetchUser = () => {
    return dispatch => {
        const user = User.get();
        if (user) {
            dispatch(fetchSuccess(user));
        } else {
            dispatch(fetchFailure())
        }
    }
};

export const saveUser = user => {
    return dispatch => {
        if (User.save(user)) {
            dispatch(saveSuccess());
            Actions.gameMain();
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