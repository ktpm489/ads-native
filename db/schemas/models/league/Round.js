class Round {
}
Round.schema = {
    name: 'Round',
    properties: {
        index: 'int',
        date: 'string',
        played: {type: 'bool', default: false},
        matches: {type: 'list', objectType: 'Match'},
    },
};

export {Round}