import {match} from './match';

const round = {
    simulate(matches, teams){
        const teamsObject = {};
        teams.forEach(t => {
            teamsObject[t.name] = t;
        });
        const results = [];
        matches.forEach(m => {
            results.push(match.simulate(teamsObject[m.home], teamsObject[m.away]));
        });
        return results;
    }
};

export {round};