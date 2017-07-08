import {randomizer} from '../generator';

const day = {
    simulate(status, actions){
        const actionsResult = this.applyActions(status, actions);
        let eventsArray = actionsResult.events;
        status = actionsResult.status;
        const eventsResult = this.todayEvents(status, actions);
        eventsArray = eventsArray.concat(eventsResult.events);
        const events = extractEvents(eventsArray);
        return {
            status,
            events
        }
    },
    applyActions(status, actions){
        return {
            status,
            events: []
        }
    },
    todayEvents(status, actions){
        return {
            status,
            events: []
        }
    }
};

const extractEvents = events => {
    const importantMessages = [];
    const mails = [];
    const news = [];

    events.forEach(e => {
        importantMessages.push(...e.importantMessages);
        mails.push(...e.mails);
        news.push(...e.news);
    });
    return {
        importantMessages,
        notifications: {
            mails,
            news
        }
    }
};

export {day};