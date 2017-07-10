import {SET_TEAMS} from '../actions';

const initialState = {
        teams: {
            object: {},
            array: {}
        }
    }
;

export default function teams(state = initialState, action) {
    switch (action.type) {
        case SET_TEAMS:
            const {teams} = action.data;
            return {
                ...state,
                teams
            };
        default:
            return state;
    }
}
