class Match {
}
Match.schema = {
    name: 'Match',
    properties: {
        home: 'string',
        away: 'string',
        result: {type: 'MatchResult'}
    },
};

export {Match}