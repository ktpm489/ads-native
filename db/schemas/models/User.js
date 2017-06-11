class User {
}
User.schema = {
    name: 'User',
    primaryKey: 'timestamp',
    properties: {
        timestamp: 'int',
        name: 'string',
        surname: 'string',
        dob: 'string'
    },
};

export {User}