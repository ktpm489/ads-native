import {generator, fixtureGenerator, teamHelper} from '../../libs';
import {SET_TEAMS} from './league';
import {Actions} from 'react-native-router-flux';

const TEAM_NUMBER = 4;
export const generateMainTeams = () => {
    const array = generator.teams(TEAM_NUMBER);
    const object = teamHelper.teamsToObject(array);

    Actions.gameMain();
    return {
        type: SET_TEAMS,
        data: {
            teams: {
                array,
                object
            },
            table: teamHelper.createCleanTable(array),
            fixture: fixtureGenerator.generate(array)
        }
    }
};