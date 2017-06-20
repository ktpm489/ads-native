import {fixtureGenerator, teamHelper} from '../../libs';

export const SET_TEAMS = 'set_teams';

export const setTeams = (array, object) => {
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