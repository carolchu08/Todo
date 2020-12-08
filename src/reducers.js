import {combineReducers } from 'redux';
import {CREATE_TODO,DELETE_TODO,UPDATE_DONE_STATUS} from './actionTypes';

const toDoList = (state=[], action)=>{
if(action.type===CREATE_TODO){
    return [...state, action.payload]
}
return state;
}
export default combineReducers({toDoList});