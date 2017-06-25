class Coach {
}
Coach.schema = {
    name: 'Coach',
    properties: {
        name: 'string',
        surname: 'string',
        age: 'int',
        nationality: 'string',
        skill: 'int',
        wage: 'int',
        module: 'string',
        status: {type: 'Status'}
    }
};

export {Coach}