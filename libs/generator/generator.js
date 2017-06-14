import faker from 'faker';
import {randomizer} from './randomizer';
import {positions} from '../../config/positions';

const GENDER_MALE = 0;

const PLAYER_AGE_RANGE = [15, 41];
const SKILL_RANGE = [40, 100];


const generator = {
    playerAge(){
        return randomizer.int(PLAYER_AGE_RANGE[0], PLAYER_AGE_RANGE[1]);
    },
    skill(){
        return randomizer.int(SKILL_RANGE[0], SKILL_RANGE[1]);
    },
    position(){
        return positions[randomizer.int(0, positions.length)];
    },
    player(locale = 'it', forcedValues = {}){
        faker.locale = locale;
        let name = 'a';
        while (name.slice(-1) === 'a') {
            name = faker.name.firstName(GENDER_MALE);
        }

        return {
            name,
            surname: faker.name.lastName(GENDER_MALE),
            age: this.playerAge(),
            skill: this.skill(),
            position: this.position(),
            ...forcedValues
        }
    }
};

export {generator}