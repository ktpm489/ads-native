class ScorerTable {
}
ScorerTable.schema = {
    name: 'ScorerTable',
    primaryKey: 'key',
    properties: {
        key: 'string',
        name: 'string',
        surname: 'string',
        team: 'string',
        goals: {type: 'int', default: 0}
    },
};

export {ScorerTable}