import {teamHelper} from '../helpers';

const match = {
    simulate(homeTeam, awayTeam){
        let homeGoal = 0;
        let awayGoal = 0;
        let isDraw = false;

        let winner = homeTeam.name;

        let loser = awayTeam.name;

        if (homeGoal < awayTeam) {
            loser = homeTeam.name;
            winner = awayTeam.name;
        }

        if (homeGoal === awayGoal) {
            isDraw = true;
        }

        const scorers = this.scorers(homeTeam, awayTeam, homeGoal, awayGoal);

        return {
            winner,
            loser,
            isDraw,
            homeGoal,
            awayGoal,
            scorers
        }
    },
    scorers(homeTeam, awayTeam, homeGoal, awayGoal){
        const home = teamHelper.scorers(homeTeam, homeGoal);
        const away = teamHelper.scorers(awayTeam, awayGoal);
        return {
            home,
            away
        }
    }
};

export {match};