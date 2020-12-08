import {CREATE_TODO,DELETE_TODO,UPDATE_DONE_STATUS} from './actionTypes';

export const createToDo=(newToDo)=>{
    return {type:CREATE_TODO, payload: newToDo};
}
export const deleteToDo=(uuid)=>{
    return {type:DELETE_TODO, payload: uuid};
}
export const changeToDoneStatus=(uuid)=>{
    return {type:UPDATE_DONE_STATUS, payload: {
        id:uuid,
        done:true
    }};
}
export const changeToNotDoneStatus=(uuid)=>{
    return {type:UPDATE_DONE_STATUS, payload: {
        id:uuid,
        done:false
    }};
}


