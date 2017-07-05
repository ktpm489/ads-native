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

export const advanceTime = (status) => {
    const date = status.date.add(1, 'day');
    return {
        type: DAY_ADVANCED,
        data: {
            status: {
                ...status,
                date
            }
        }
    };
};
