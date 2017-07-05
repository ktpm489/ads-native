import {randomizer} from '../generator';
const day = {
    simulate(status, actions){
        const importantMessages = [];

        if (randomizer.chance(50)) {
            importantMessages.push({body: `A day has passed`});
        }

        const notifications = {
            mails: [],
            news: []
        };

        return {
            importantMessages,
            notifications
        }
    }
};

export {day};