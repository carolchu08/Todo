import {CREATE_TODO,DELETE_TODO,UPDATE_DONE_STATUS} from './actionTypes';

export const createToDo=(newToDo)=>{
    return {type:CREATE_TODO, payload: newToDo};
}
export const deleteToDo=(uuid)=>{
    return {type:DELETE_TODO, payload: uuid};
}
export const changeDoneStatus=(uuid)=>{
    return {
        type:UPDATE_DONE_STATUS,
        payload: uuid
    
    };
}

