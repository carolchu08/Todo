import { connect } from 'react-redux';
import ToDoGenerator from '../Component/ToDoGenerator';
import { createToDo } from '../actions';

const mapToDispatchProps = dispatch => ({
    createToDo: (newToDo) => dispatch(createToDo(newToDo))
});


const ToDoGeneratorContainer = connect(null, mapToDispatchProps)(ToDoGenerator);
export default ToDoGeneratorContainer;
