import moment from 'moment';
import {NEW_GAME_STARTED} from '../actions';
const initialState = {
    date: `10-06-${moment().format('YYYY')}`,
    events: [],
    importantMessages: [],
    notifications: []
};

export default function game(state = initialState, action = {}) {
    switch (action.type) {
        case NEW_GAME_STARTED:
            return {
                ...initialState,
                ...action.data,
            };
        default:
            return state;
    }
}