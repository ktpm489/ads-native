import {teamHelper} from '../../libs';

export const SET_TEAMS = 'set_teams';

export const setTeams = array => {
    return {
        type: SET_TEAMS,
        data: {
            teams: {
                array,
                object: teamHelper.teamsToObject(array)
            }
        }
    }
};