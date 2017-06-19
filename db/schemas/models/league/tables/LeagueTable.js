class LeagueTable {
}
LeagueTable.schema = {
    name: 'LeagueTable',
    primaryKey: 'team',
    properties: {
        team: 'string',
        played: {type: 'int', default: 0},
        won: {type: 'int', default: 0},
        lost: {type: 'int', default: 0},
        draw: {type: 'int', default: 0},
        points: {type: 'int', default: 0},
        goalsScored: {type: 'int', default: 0},
        goalsConceded: {type: 'int', default: 0}
    },
};

export {LeagueTable}