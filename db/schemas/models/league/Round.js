class Round {
}
Round.schema = {
    name: 'Round',
    properties: {
        index: 'int',
        date: 'string',
        matches: {type: 'list', objectType: 'Match'},
    },
};

export {Round}