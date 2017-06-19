class Scorer {
}
Scorer.schema = {
    name: 'Scorer',
    properties: {
        name: 'string',
        surname: 'string',
        goals: {type: 'int', default: -1}
    },
};

export {Scorer}