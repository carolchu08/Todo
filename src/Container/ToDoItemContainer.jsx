import {connect} from 'react-redux';
import {deleteToDo,changeDoneStatus} from '../actions';
import ToDoItem from '../Component/ToDoItem';

const mapToDispatchProps = dispatch =>({
    deleteToDo: (uuid)=> dispatch (deleteToDo (uuid)),
    changeDoneStatus: (uuid)=> dispatch(changeDoneStatus (uuid))
});


const ToDoItemContainer = connect(null,mapToDispatchProps)(ToDoItem);
export default ToDoItemContainer;
