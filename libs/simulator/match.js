import {teamHelper} from '../helpers';
import {randomizer} from '../generator/randomizer';

const match = {
    simulate(homeTeam, awayTeam){
        let homeGoal = 0;
        let awayGoal = 0;
        let isDraw = false;
        let winner = homeTeam.name;
        let loser = awayTeam.name;

        const homePoint = this.points(homeTeam);

        const awayPoint = teamHelper.averageSkill(awayGoal);

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
    points(team){
        let points = teamHelper.averageSkill(team);
        points += this.malusModule(teamHelper.canPlayModule(team));
    },
    scorers(homeTeam, awayTeam, homeGoal, awayGoal){
        const home = teamHelper.scorers(homeTeam, homeGoal);
        const away = teamHelper.scorers(awayTeam, awayGoal);
        return {
            home,
            away
        }
    },
    malusModule(teamCanPlay){
        const modifier = randomizer.int(1, 10);
        if (!teamCanPlay) {
            return -1 * modifier;
        }
        return modifier;
    },
    fluke(){
        return randomizer.int(0, 3);
    }
};

export {match};