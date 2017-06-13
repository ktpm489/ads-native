import {realm, saveObject} from '../realm';

const User = {
    schema: 'User',
    get() {
        const user = realm.objectForPrimaryKey(this.schema, this.schema);
        return user === undefined ? false : user;
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