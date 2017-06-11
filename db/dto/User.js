import moment from 'moment';
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
            timestamp: moment().unix()
        };
        console.log('saving', user);
        return saveObject(this.schema, user);
    }
};

export {User};