import { connect } from 'react-redux';
import ToDoGroup from '../Component/ToDoGroup';
import {initTodoList} from '../actions';

const mapStateToProps = state => ({
    toDoList: state.toDoList
});
const mapDispatchToProps = dispatch => ({
    initTodoList: (newTodoList)=> dispatch(initTodoList(newTodoList))
   
});


const ToDoGroupContainer = connect(mapStateToProps,mapDispatchToProps)(ToDoGroup);
export default ToDoGroupContainer;