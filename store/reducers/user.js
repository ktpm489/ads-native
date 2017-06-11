import {FETCH_USER_SUCCESS, FETCH_USER_FAILURE, SAVE_USER_SUCCESS, SAVE_USER_FAILURE} from '../actions';

const initialState = {};

export default function user(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
        case SAVE_USER_SUCCESS:
            return {
                ...action.data,
            };
        case FETCH_USER_FAILURE:
            return initialState;
        case SAVE_USER_FAILURE:
        default:
            return state;
    }
}
