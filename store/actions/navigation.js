export const SELECT_TEAM_DETAILS = 'select_team_details';
export const SELECT_PLAYER_DETAILS = 'select_player_details';
export const SELECT_COACH_DETAILS = 'select_coach_details';


export const selectTeamDetails = team => {
    return {
        type: SELECT_TEAM_DETAILS,
        data: team
    }
};

export const selectPlayerDetails = player => {
    return {
        type: SELECT_PLAYER_DETAILS,
        data: player
    }
};
export const selectCoachDetails = coach => {
    return {
        type: SELECT_COACH_DETAILS,
        data: coach
    }
};