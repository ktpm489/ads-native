class Round {
}
Round.schema = {
    name: 'Round',
    properties: {
        index: 'int',
        date: 'date',
        played: {type: 'bool', default: false},
        matches: {type: 'list', objectType: 'Match'},
    },
};

export {Round}