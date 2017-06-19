class Coach {
}
Coach.schema = {
    name: 'Coach',
    primaryKey: 'key',
    properties: {
        key: 'string',
        name: 'string',
        surname: 'string',
        age: 'int',
        nationality: 'string',
        skill: 'int',
        module: 'string',
        status: {type: 'Status'}
    }
};

export {Coach}