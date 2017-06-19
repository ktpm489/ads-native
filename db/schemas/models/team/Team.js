class Team {
}
Team.schema = {
    name: 'Team',
    primaryKey: 'name',
    properties: {
        name: 'string',
        status: {type: 'Status'},
        nationality: 'string',
        finance: 'int',
        coach: {type: 'Coach'},
        roster: {type: 'list', objectType: 'Player'}
    },
};

export {Team}