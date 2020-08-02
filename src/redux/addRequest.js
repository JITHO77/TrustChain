import * as  ActionTypes from './ActionTypes';

export const Request = (state = {
   isLoading: false,
   errMess: null,
   requestSuccess: false
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_REQUEST:
            return{...state, isLoading: false, errMess: null, requestSuccess: true};
        case ActionTypes.ADD_REQUEST_FAILED:
            return{...state, isLoading: false, errMess: action.payload, requestSuccess: false};
        case ActionTypes.ADD_REQUEST_LOADING:
            return{...state, isLoading: true, errMess: null, requestSuccess: false};
                             
        default:
            return state;    
    }
}