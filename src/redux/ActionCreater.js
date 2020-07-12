import * as ActionTypes from './ActionTypes';

export const incStatus = (status) =>(dispatch) =>{
    dispatch(addStatus(status));
    console.log('st', status)
};

export const addStatus = (status) =>({
    type: ActionTypes.STATUS_INCREMENT,
    payload: status
});