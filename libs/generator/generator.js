import faker from 'faker';
import {range} from '../../utils';
import {randomizer} from './randomizer';
import {positions} from '../../config/positions';
import {nationalities} from '../../config/nationalities';

const GENDER_MALE = 0;

const PLAYER_AGE_RANGE = [15, 41];
const SKILL_RANGE = [40, 100];


const generator = {
    teamName(nationality = 'it'){
        faker.locale = nationality;
        return faker.address.city();
    },
    playerAge(){
        return randomizer.int(PLAYER_AGE_RANGE[0], PLAYER_AGE_RANGE[1]);
    },
    skill(){
        return randomizer.int(SKILL_RANGE[0], SKILL_RANGE[1]);
    },
    position(){
        return randomizer.pickOne(positions);
    },
    nationality(){
        return randomizer.pickOne(nationalities);
    },
    player(forcedValues = {}){
        const locale = forcedValues.nationality || 'it';
        faker.locale = locale;
        let name = 'a';
        while (name.slice(-1) === 'a') {
            name = faker.name.firstName(GENDER_MALE);
        }

        return {
            name,
            surname: faker.name.lastName(GENDER_MALE),
            age: this.playerAge(),
            nationality: locale,
            skill: this.skill(),
            position: this.position(),
            ...forcedValues
        }
    },
    players(number = 10, forcedValues = {}){
        return range(number).map(_ => this.player(forcedValues));
    },
    team(forcedValues = {}){
        const rosterSize = randomizer.int(18, 25);
        const mostPlayers = Math.round(rosterSize * (1 - 0.8));

        const nationality = forcedValues.nationality || 'it';
        const roster = this.players(mostPlayers, {nationality});
        roster.push(this.player({position: 'GK', nationality}));
        range(rosterSize - mostPlayers).forEach(_ => {
            roster.push(this.player({nationality: this.nationality()}));
        });
        return {
            name: this.teamName(nationality),
            finance: randomizer.int(1, 100),
            roster
        }
    }
};

export {generator}