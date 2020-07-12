import * as ActionTypes from './ActionTypes';

export const Status = (state = {
        status: 0
}, action) => {
    switch(action.type){
        case ActionTypes.STATUS_INCREMENT:
            return{state, status: action.payload};
            
        default:
            return state;    
    }
}