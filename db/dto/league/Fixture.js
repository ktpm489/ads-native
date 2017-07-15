import {toJs, getObjects, saveObjects} from '../../realm';

const Fixture = {
    schema: 'Round',
    getAllRounds(){
        return toJs(getObjects(this.schema));
    },
    save(rounds){
        return saveObjects(this.schema, rounds);
    }
};

export {Fixture};