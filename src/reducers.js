import { combineReducers } from 'redux';
import { CREATE_TODO, DELETE_TODO, UPDATE_DONE_STATUS,ADD_TODO_LIST } from './actionTypes';

const toDoList = (state = [], action) => {
    if (action.type === CREATE_TODO) {
        return [...state, action.payload]
    };
    if (action.type === DELETE_TODO) {
        const updatedToDoList = [];
        state.forEach(item => {
            if (item.id !== action.payload) {
                updatedToDoList.push({ ...item });
            }

        });
        return updatedToDoList;
    }
    if (action.type === UPDATE_DONE_STATUS) {
        return state.map(todo => {
            if (todo.id === action.payload) {
                return { ...todo, done: !todo.done };
            }
            return todo

        })
    }
    if(action.type===ADD_TODO_LIST){
        console.log("1");
        return action.payload;
    }
    console.log("test");
    return state;
}
export default combineReducers({ toDoList });