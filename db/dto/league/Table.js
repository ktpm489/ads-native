import {getObjects, saveObjects, toJs} from '../../realm';

const Table = {
    schema: 'LeagueTable',
    get(){
        const table = {};
        toJs(getObjects(this.schema)).forEach(row => {
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