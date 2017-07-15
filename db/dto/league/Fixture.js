import {toJs, getObjects, saveObjects} from '../../realm';

const Fixture = {
    schema: 'Round',
    getRound(){
        return toJs(getObjects(this.schema));
    },
    save(matches){
        return saveObjects(this.schema, matches);
    }
};

export {Fixture};