import {getObjects, saveObject} from '../../realm';

const Table = {
    schema: 'LeagueTable',
    get(){
        return getObjects(this.schema);
    },
    save(table){
        return saveObject(this.schema, table);
    }
};

export {Table};