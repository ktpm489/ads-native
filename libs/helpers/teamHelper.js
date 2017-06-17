import {randomizer} from '../generator/randomizer';
import {range} from '../../utils';
import {extendedPositions} from '../../config/positions';

const teamHelper = {
    scorers(team, goals){
        const orderedRoster = team.roster.sort((p1, p2) => extendedPositions[p1.position].weight < extendedPositions[p2.position].weight);
        const possibleScorers = orderedRoster.filter(p => p.position !== 'GK');
        const scorers = [];
        range(goals).forEach(_ => {
            if (randomizer.chance(80)) {
                scorers.push(possibleScorers[randomizer.int(0, 3)]);
            } else {
                scorers.push(randomizer.pickOne(possibleScorers));
            }
        });

        return scorers;
    },
    averageSkill(team){
        let avg = 0;
        if (team.roster && team.roster.length) {
            let tot = 0;
            team.roster.forEach(p => tot += p.skill);
            avg = tot / team.roster.length;
        }
        return avg;
    },
    averageAge(team){
        let avg = 0;
        if (team.roster && team.roster.length) {
            let tot = 0;
            team.roster.forEach(p => tot += p.age);
            avg = tot / team.roster.length;
        }
        return avg;
    },
    updateStatus(team){
        let morale = 0;
        if (team.roster && team.roster.length) {
            let tot = 0;
            team.roster.forEach(p => tot += p.status.morale);
            morale = tot / team.roster.length;
        }
        return {
            ...team,
            status: {
                morale
            }
        }
    }
};

export {teamHelper};