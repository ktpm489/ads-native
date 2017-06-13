import {getObjects, saveObject} from '../realm';

const User = {
    schema: 'User',
    get() {
        const user = getObjects(this.schema);
        return user === undefined ? false : user[0];
    },
    save(user) {
        user = {
            ...user,
            key: this.schema
        };
        return saveObject(this.schema, user);
    }
};

export {User};