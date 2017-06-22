import {SELECT_PLAYER_DETAILS, SELECT_COACH_DETAILS, SELECT_TEAM_DETAILS} from '../actions'
const initialState = {
    team: {},
    player: {},
    coach: {}
};

export default function navigation(state = initialState, action = {}) {
    switch (action.type) {
        case SELECT_PLAYER_DETAILS:
            return {
                ...state,
                player: action.data
            };
        case SELECT_COACH_DETAILS:
            return {
                ...state,
                coach: action.data
            };
        case SELECT_TEAM_DETAILS:
            return {
                ...state,
                team: action.data
            };
        default:
            return state;
    }
}