import moment from 'moment';
import {NEW_GAME_STARTED, DAY_ADVANCED} from '../actions';

import {DATE_FORMAT, TEAM_NUMBER} from '../../const';

const initialState = {
    status: {
        date: moment(`10-06-${moment().format('YYYY')}`, DATE_FORMAT),
        team: null,
        trust: null,
        isMarketOpen: true,
        gamesLeft: ((TEAM_NUMBER - 1 ) * 2)
    },
    events: {
        importantMessages: [],
        notifications: {
            mails: [],
            news: []
        }
    },
    actions: []
};

export default function game(state = initialState, action = {}) {
    switch (action.type) {
        case NEW_GAME_STARTED:
        case DAY_ADVANCED:
            return {
                ...initialState,
                ...action.data,
            };
        default:
            return state;
    }
}