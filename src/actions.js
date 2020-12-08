import {CREATE_TODO,DELETE_TODO,UPDATE_DONE_STATUS} from './actionTypes';

export const createToDo=(newToDo)=>{
    return {type:CREATE_TODO, payload: newToDo};
}
