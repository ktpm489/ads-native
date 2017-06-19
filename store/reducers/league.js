import {SET_TEAMS} from '../actions';

const initialState = {
        playerTeam: {},
        teams: {
            object: {},
            array: {}
        },
        table: {},
        fixture: [],
        lastResults: []
    }
;

export default function league(state = initialState, action) {
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
