import { connect } from 'react-redux';
import { deleteToDo, changeDoneStatus } from '../actions';
import ToDoItem from '../Component/ToDoItem';

const mapToDispatchProps = dispatch => ({
    deleteToDo: (id) => dispatch(deleteToDo(id)),
    changeDoneStatus: (id) => dispatch(changeDoneStatus(id))
});


const ToDoItemContainer = connect(null, mapToDispatchProps)(ToDoItem);
export default ToDoItemContainer;
