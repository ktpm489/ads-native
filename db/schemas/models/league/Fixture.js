class Fixture {
}
Fixture.schema = {
    name: 'Fixture',
    properties: {
        rounds: {type: 'list', objectType: 'Match'}
    },
};

export {Fixture}