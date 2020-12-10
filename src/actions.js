import { ADD_TODO_LIST, CREATE_TODO, DELETE_TODO, UPDATE_DONE_STATUS,LABEL_LIST,CREATE_TODO_LABEL,DELETE_LABEL } from './actionTypes';

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
export const initTodoList = (newToDo) => {
    return { type: ADD_TODO_LIST, payload: newToDo };
}
export const initTodoLabelList = (todoLabelList)=>{
    return {type:LABEL_LIST, payload: todoLabelList};
}
export const createToDoLabel = (newToDoLabel) => {
    return { type:CREATE_TODO_LABEL, payload: newToDoLabel };

}
export const deleteTodoLabel = (id)=>{
    return {type:DELETE_LABEL, payload:id}
}

