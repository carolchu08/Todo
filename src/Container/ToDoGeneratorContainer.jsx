import { connect } from 'react-redux';
import ToDoGenerator from '../Component/ToDoGenerator';
import { createToDo, createToDoLabel, initTodoLabelList, deleteTodoLabel } from '../actions';

const mapToDispatchProps = dispatch => ({
    createToDo: (newToDo) => dispatch(createToDo(newToDo)),
    initTodoLabelList:(labelList)=> dispatch(initTodoLabelList(labelList)),
    createToDoLabel: (newLabel)=> dispatch(createToDoLabel(newLabel)),
    deleteTodoLabel:(id)=>dispatch(deleteTodoLabel(id))
});
const mapStateToProps = state => ({
    toDoLabelList: state.toDoLabelList
});


const ToDoGeneratorContainer = connect(mapStateToProps, mapToDispatchProps)(ToDoGenerator);
export default ToDoGeneratorContainer;
