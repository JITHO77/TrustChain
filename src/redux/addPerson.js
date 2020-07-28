import * as  ActionTypes from './ActionTypes';

export const Person = (state = {
    person:{
        name:'',
        state:'',
        address:'',
        phno:'',
        image:'',
        id:''
    }
}, action) => {
    switch(action.type){
        case ActionTypes.SAVE_PERSONAL_DETAILS:

            return{person: action.payload};
            
        default:
            return state;    
    }
}