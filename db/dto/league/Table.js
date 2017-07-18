import {realm, getObjects, saveObjects, toJs} from '../../realm';

const Table = {
    schema: 'LeagueTable',
    getRows(){
        return Array.from(realm.objects(this.schema).sorted('points'));
    },
    getObject(){
        const table = {};
        this.getRows().forEach(row => {
            table[row.name] = {
                ...row
            }
        });

        return table;
    },
    save(table){
        const tableRows = Object.keys(table).map(team => {
            return {
                ...table[team]
            }
        });
        return saveObjects(this.schema, tableRows);
    }
};

export {Table};