class MatchResult {
}
MatchResult.schema = {
    name: 'MatchResult',
    properties: {
        home: 'string',
        away: 'string',
        winner: 'string',
        loser: 'string',
        isDraw: {type: 'bool', default: false},
        scorers: {type: 'MatchScorers'},
        homeGoal: {type: 'int', default: 0},
        awayGoal: {type: 'int', default: 0}
    },
};

export {MatchResult}