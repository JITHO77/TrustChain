import * as  ActionTypes from './ActionTypes';

export const TrustChainData = (state = {
    isLoading: true, 
    errMess: null,
    request:[],
    requestCount:[],
    trustChain: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_TRUSTCHAIN_DATA:
            return{...state, isLoading:false, errMess:null, request:[], requestCount:[], trustChain: action.payload};
        case ActionTypes.TRUSTCHAIN_DATA_LOADING:
            return{...state, isLoading:true, errMess:null, request:[], requestCount:[], trustChain: []};
        case ActionTypes.ADD_TRUSTCHAIN_REQUEST:
            return{...state, isLoading:true, errMess:null, request: action.payload, requestCount:[], trustChain: [] };
        case ActionTypes.ADD_TRUSTCHAIN_REQUEST_ID:
            return{...state, isLoading:false, errMess:null, request:[], requestCount: action.payload,
                 trustChain: []};
         case ActionTypes.TRUSTCHAIN_DATA_FAILED:
             return{...state, isLoading:true, errMess:action.payload , request:[], requestCount: action.payload,
                 trustChain: []};                    
        default:
            return state;    
    }
}