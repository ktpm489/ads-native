import {randomizer} from '../generator';

import {teamHiringRequest} from './events/user/teamHiringRequest';

const day = {
    simulate(status, actions, teams = null){
        const importantMessages = [];
        if (!status.team && teams) {
            if (randomizer.chance(70)) {
                teamHiringRequest.event(randomizer.pickOne(teams));
            }
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