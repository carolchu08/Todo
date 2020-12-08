import {combineReducers } from 'redux';
import {CREATE_TODO,DELETE_TODO,UPDATE_DONE_STATUS} from './actionTypes';

const toDoList = (state=[], action)=>{
if(action.type===CREATE_TODO){
    return [...state, action.payload]
}
if(action.type===DELETE_TODO){
    const updatedToDoList = [];
  state.forEach(item=> {
      if(item.id!==action.payload){
          updatedToDoList.push(...item);
      }

  });
  return updatedToDoList;
    
}
return state;
}
export default combineReducers({toDoList});