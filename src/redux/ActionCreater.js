import * as ActionTypes from './ActionTypes';

export const incStatus = (status) =>(dispatch) =>{
    dispatch(addStatus(status));
    console.log('st', status)
};

export const addStatus = (status) =>({
    type: ActionTypes.STATUS_INCREMENT,
    payload: status
});

export const savePersonalDetails = (name, state, address, phno, image, id) =>(dispatch) => {
    const person={
        name: name,
        state: state,
        address: address,
        phno: phno,
        image: image,
        id: id,


    }
    dispatch(addPerson(person));
};

export const addPerson = (person) => ({
    type: ActionTypes.SAVE_PERSONAL_DETAILS,
    payload: person
});