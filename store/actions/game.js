import {GAME_NAME} from '../../config';

export const NEW_GAME_STARTED = 'new_game_started';

export const newGame = user => {
    return {
        type: NEW_GAME_STARTED,
        data: {
            importantMessages: [
                {
                    body: `Ehy there Mr. ${user.name} ${user.surname}, welcome to ${GAME_NAME}`
                }
            ]
        }
    }
};
