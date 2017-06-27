import faker from 'faker';
import {range, format} from '../../utils';
import {randomizer} from './randomizer';
import {nationalities} from '../../config/nationalities';
import {positions} from '../../config/positions';
import {modules} from '../../config/modules';
import {teamNames} from '../../config/teamDefinitions';
import {playerHelper, coachHelper} from '../helpers';

const GENDER_MALE = 0;

const PLAYER_AGE_RANGE = [15, 41];
const COACH_AGE_RANGE = [29, 80];
const SKILL_RANGE = [40, 100];


const generator = {
    teamName(nationality = 'it'){
        faker.locale = nationality;
        return format(randomizer.pickOne(teamNames), faker.address.city());
    },
    playerAge(){
        return randomizer.int(PLAYER_AGE_RANGE[0], PLAYER_AGE_RANGE[1]);
    },
    coachAge(){
        return randomizer.int(COACH_AGE_RANGE[0], COACH_AGE_RANGE[1]);
    },
    skill(){
        return randomizer.int(SKILL_RANGE[0], SKILL_RANGE[1]);
    },
    position(){
        return randomizer.pickOne(positions);
    },
    module(){
        return randomizer.pickOne(modules);
    },
    nationality(){
        return randomizer.pickOne(nationalities);
    },
    status(){
        return {
            morale: randomizer.int(10, 100)
        }
    },
    statusModifiers(){
        return {
            decreases: [
                {
                    chance: randomizer.int(10, 90),
                    value: randomizer.int(1, 15)
                }
            ],
            increases: [
                {
                    chance: randomizer.int(10, 90),
                    value: randomizer.int(1, 15)
                }
            ]
        };
    },
    person(locale){
        faker.locale = locale;
        let name = 'a';
        while (
        ['a',].includes(name.slice(-1))
        ||
        ['ie', 'ah', 'hy', 'ay', 'ee'].includes(name.slice(-2))
            ) {
            name = faker.name.firstName(GENDER_MALE);
        }
        return {
            name,
            surname: faker.name.lastName(GENDER_MALE),
            contract: randomizer.int(1, 5)
        }
    },
    coach(forcedValues = {}){
        const locale = forcedValues.nationality || 'it';
        const person = this.person(locale);

        const skill = this.skill();
        const age = this.coachAge();

        return {
            ...person,
            status: this.status(),
            age,
            nationality: locale,
            skill,
            module: this.module(),
            wage: coachHelper.calculateWage({skill, age}),
            ...forcedValues
        }
    },
    player(forcedValues = {}){
        const locale = forcedValues.nationality || 'it';
        const person = this.person(locale);
        const position = this.position();
        const age = this.playerAge();
        const skill = this.skill();
        const value = playerHelper.calculateValue({position, skill, age});

        return {
            ...person,
            status: this.status(),
            age,
            nationality: locale,
            skill,
            value,
            position,
            wage: playerHelper.calculateWage({age, value}),
            ...forcedValues
        }
    },
    players(number = 10, forcedValues = {}){
        return range(number).map(_ => this.player(forcedValues));
    },
    team(forcedValues = {}){
        const rosterSize = randomizer.int(18, 29);
        const mostPlayers = Math.round(rosterSize * (1 - 0.8));

        const nationality = forcedValues.nationality || 'it';
        const roster = this.players(mostPlayers, {nationality});
        roster.push(this.player({position: 'GK', nationality}));
        range(rosterSize - mostPlayers).forEach(_ => {
            roster.push(this.player({nationality: this.nationality()}));
        });

        const coachNationality = randomizer.chance(90) ? nationality : this.nationality();
        return {
            name: this.teamName(nationality),
            status: this.status(),
            nationality,
            finance: randomizer.int(1, 100),
            coach: this.coach({nationality: coachNationality}),
            roster
        }
    },
    teams(number = 8, forcedValues = {}){
        return range(number).map(() => this.team(forcedValues));
    }
};

export {generator}