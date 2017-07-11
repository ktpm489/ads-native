import {day} from '../../libs/simulator';
import {GAME_NAME} from '../../config';

export const NEW_GAME_STARTED = 'new_game_started';
export const DAY_ADVANCED = 'day_advanced';

export const newGame = user => {
    return {
        type: NEW_GAME_STARTED,
        data: {
            importantMessages: [
                {
                    body: `Ehy Mr. ${user.surname}, welcome to ${GAME_NAME}`
                }
            ]
        }
    }
};

export const advanceTime = game => {
    return (dispatch, getState) => {
        const {status, actions} = game;
        const simulationResult = day.simulate(status, actions, getState().teams.array);
        const date = simulationResult.status.date.add(1, 'day');
        const {importantMessages, notifications} = simulationResult;
        dispatch(
            dayAdvanced(
                {
                    status: {
                        ...simulationResult.status,
                        date
                    },
                    importantMessages,
                    notifications
                }
            ));
    }
};

const dayAdvanced = data => ({
    type: DAY_ADVANCED,
    data
});

