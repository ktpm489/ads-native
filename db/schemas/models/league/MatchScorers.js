class MatchScorers {
}
MatchScorers.schema = {
    name: 'MatchScorers',
    properties: {
        home: {type: 'list', objectType: 'Scorer'},
        away: {type: 'list', objectType: 'Scorer'}
    },
};

export {MatchScorers}