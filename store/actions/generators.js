import {MAIN_DASH} from '../../const/routes';
import {generator, fixtureGenerator, teamHelper} from '../../libs';
import {Team, Table, Fixture} from '../../db';
import {setTeams} from './teams';
import {Actions} from 'react-native-router-flux';
import {TEAM_NUMBER} from '../../const';

export const generateLeague = () => {
    const array = generator.teams(TEAM_NUMBER);
    const object = teamHelper.teamsToObject(array);
    const table = teamHelper.createCleanTable(array);
    const fixture = fixtureGenerator.generate(array);
    console.log(fixture);
    Team.saveAll(array);
    Table.save(table);
    //Fixture.save(fixture);
    Actions[MAIN_DASH]();
    return setTeams(array, object);
};