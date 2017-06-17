import {randomizer} from '../generator/randomizer';
import {range} from '../../utils';
import {extendedModules} from '../../config/modules';
import {extendedPositions, positions} from '../../config/positions';

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
    },
    isOffensive(team){
        const module = team.coach ? team.coach.module : '4-4-2';
        return extendedModules[module].character === 1;
    },
    isDefensive(team){
        const module = team.coach ? team.coach.module : '4-4-2';
        return extendedModules[module].character === 4;
    },
    canPlayModule(team){
        const module = team.coach ? team.coach.module : '4-4-2';
        const roles = extendedModules[module].roles;
        const playersPerRole = this.playersPerRole(team);
        return roles.every((needed, index) => {
            return !(needed > 0 && !(playersPerRole[positions[index]] >= needed));
        });
    },
    playersPerRole(team){
        const positionMapping = {};
        positions.forEach(p => positionMapping[p] = 0);
        team.roster.forEach(p => {
            positionMapping[p.position] += 1;
        });
        return positionMapping;
    }
};

export {teamHelper};