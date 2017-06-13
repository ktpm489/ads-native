class User {
}
User.schema = {
    name: 'User',
    primaryKey: 'key',
    properties: {
        key: 'string',
        name: 'string',
        surname: 'string',
        dob: 'string'
    },
};

export {User}