import {realm, toJs, saveObjects, getObjects} from '../../realm';

const Fixture = {
    schema: 'Fixture',
    getMatches(){
        return toJs(getObjects(this.schema).pop().matches);
    }
};

export {Fixture};