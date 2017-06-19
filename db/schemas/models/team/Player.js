class Player {
}
Player.schema = {
    name: 'Player',
    properties: {
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