import Realm from 'realm';

import {schemas} from './schemas';
const realm = new Realm(schemas.pop());

const wipeDb = () => {
    realm.write(() => {
        realm.deleteAll();
    });
};

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

const saveObjects = (modelName, array) => {
    return array.map(data => saveObject(modelName, data));
};

const saveObject = (modelName, data) => {
    try {
        realm.write(() => {
            realm.create(modelName, data, true);
        });
        return true;
    } catch (error) {
        console.log(modelName, error, data);
        return false;
    }
};

export {
    realm,
    wipeDb,
    toJs,
    getObjects,
    saveObject,
    saveObjects,
    deleteObject
};