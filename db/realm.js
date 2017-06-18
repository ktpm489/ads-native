import Realm from 'realm';

import {schemas} from './schemas';
const realm = new Realm(schemas.pop());

const toJs = (resultSet) => {
    return resultSet.map(x => Object.assign({}, x));
};

const deleteObject = model => {
    realm.write(() => {
        realm.delete(model);
    });
};

const getObjects = modelName => {
    return toJs(realm.objects(modelName));
};

const saveObject = (modelName, data) => {
    try {
        console.log(data);
        realm.write(() => {
            realm.create(modelName, data, true);
        });
        return true;
    } catch (error) {
        console.log('error', error);
        return false;
    }
};

export {realm, toJs, getObjects, saveObject, deleteObject};