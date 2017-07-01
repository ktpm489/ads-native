import {MAIN_DASH} from '../../const/routes';
import {generator, fixtureGenerator, teamHelper} from '../../libs';
import {Team} from '../../db';
import {setTeams} from './teams';
import {Actions} from 'react-native-router-flux';

const TEAM_NUMBER = 16;

export const generateMainTeams = () => {
    const array = generator.teams(TEAM_NUMBER);
    const object = teamHelper.teamsToObject(array);
    Team.saveAll(array);
    Actions[MAIN_DASH]();
    return setTeams(array, object);
};