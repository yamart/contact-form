import {TYPES} from './Actions';
import * as Immutable from 'immutable';
import LocalStorage from '../../Services/LocalStorage';

const form = (state:Immutable.Map<string,any>, action) => {
    let newState = state;
    switch(action.type) {
        case TYPES.VALUE_CHANGED:
            let data = newState.get('data').toJS();
            data[action.data.key] = action.data.value;
            newState = newState.set('data',Immutable.fromJS(data));
        break;
        case TYPES.SUBMIT_FORM:
            LocalStorage.add('messages',newState.get('data').toJS());
            newState = newState.set('data',Immutable.fromJS({}));
        break;
    }

    return newState;
}

export default form;