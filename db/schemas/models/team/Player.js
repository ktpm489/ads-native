class Player {
}
Player.schema = {
    name: 'Player',
    primaryKey: 'key',
    properties: {
        key: 'string',
        name: 'string',
        surname: 'string',
        age: 'int',
        nationality: 'string',
        skill: 'int',
        position: 'string',
        status: {type: 'Status'}
    }
};

export {Player}