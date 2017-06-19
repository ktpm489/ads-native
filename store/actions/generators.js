import {generator, fixtureGenerator, teamHelper} from '../../libs';
import {Team} from '../../db'
import {setTeams} from './league';
import {Actions} from 'react-native-router-flux';

const TEAM_NUMBER = 4;
export const generateMainTeams = () => {
    const array = generator.teams(TEAM_NUMBER);
    const object = teamHelper.teamsToObject(array);
    Team.saveAll(array);
    Actions.gameMain();
    return setTeams(array, object);
};