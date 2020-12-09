import { CREATE_TODO, DELETE_TODO, UPDATE_DONE_STATUS } from './actionTypes';

export const createToDo = (newToDo) => {
    return { type: CREATE_TODO, payload: newToDo };
}
export const deleteToDo = (id) => {
    return { type: DELETE_TODO, payload: id };
}
export const changeDoneStatus = (id) => {
    return {
        type: UPDATE_DONE_STATUS,
        payload: id

    };
}

