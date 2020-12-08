import {connect} from 'react-redux';
import {deleteToDo} from '../actions';
import ToDoItem from '../Component/ToDoItem';

const mapToDispatchProps = dispatch =>({
    deleteToDo: (uuid)=> dispatch (deleteToDo (uuid))
});


const ToDoItemContainer = connect(null,mapToDispatchProps)(ToDoItem);
export default ToDoItemContainer;
