import { TrademarkCircleTwoTone } from '@ant-design/icons';
import { combineReducers } from 'redux';
import { CREATE_TODO, DELETE_TODO, DELETE_LABEL, UPDATE_DONE_STATUS, ADD_TODO_LIST, LABEL_LIST, CREATE_TODO_LABEL } from './actionTypes';

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
    if (action.type === ADD_TODO_LIST) {
        console.log("1");
        return action.payload;
    }
    return state;
}
const toDoLabelList = (state = [], action) => {
    if (action.type === LABEL_LIST) {
        return action.payload;
    }
    if (action.type === CREATE_TODO_LABEL) {
        return [...state, action.payload];
    }
    if (action.type === DELETE_LABEL) {
        console.log(action.payload);
        console.log("delete",state.filter(item=>(item.labelID!==action.payload)));
       
        return state.filter(item=>(item.labelID!==action.payload));
        

    }
    return state;
}
export default combineReducers({ toDoList, toDoLabelList });