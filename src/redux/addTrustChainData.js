import * as  ActionTypes from './ActionTypes';

export const TrustChainData = (state = {
    isLoading: true, 
    errMess: null,
    request:[],
    trustChain: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_TRUSTCHAIN_DATA:
            return{...state, isLoading:false, errMess:null, trustChain: action.payload};
        case ActionTypes.TRUSTCHAIN_DATA_LOADING:
            return{...state, isLoading:true, errMess:null, trustChain: []};
        case ActionTypes.ADD_TRUSTCHAIN_REQUEST:
            return{...state, isLoading:true, errMess:null, trustChain: action.payload};
        case ActionTypes.ADD_TRUSTCHAIN_DATA:
            return{...state, isLoading:false, errMess:action.payload, trustChain: []};
                        
        default:
            return state;    
    }
}