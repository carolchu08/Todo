import {connect} from 'react-redux';
import {deleteToDo,changeToDoneStatus,changeToNotDoneStatus} from '../actions';
import ToDoItem from '../Component/ToDoItem';

const mapToDispatchProps = dispatch =>({
    deleteToDo: (uuid)=> dispatch (deleteToDo (uuid)),
    changeToDoneStatus: (uuid)=> dispatch(changeToDoneStatus (uuid)),
    changeToNotDoneStatus: (uuid)=> dispatch(changeToNotDoneStatus (uuid))
});


const ToDoItemContainer = connect(null,mapToDispatchProps)(ToDoItem);
export default ToDoItemContainer;
