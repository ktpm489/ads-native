class Player {
}
Player.schema = {
    name: 'Player',
    properties: {
        name: 'string',
        surname: 'string',
        morale: {type: 'string', default: null},
        contract: 'int',
        age: 'int',
        nationality: 'string',
        skill: 'int',
        wage: 'int',
        value: 'int',
        position: 'string',
        status: {type: 'Status'}
    }
};

export {Player}