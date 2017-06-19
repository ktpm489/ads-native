import {realm, saveObjects, getObjects} from '../realm';

const Team = {
    schema: 'Team',
    getAll(){
        return getObjects(this.schema);
    },
    get(name) {
        const team = realm.objectForPrimaryKey(this.schema, name);
        return team === undefined ? false : team;
    },
    saveAll(teams = []) {
        return saveObjects(this.schema, teams);
    }
};

export {Team};