import { connect } from 'react-redux';
import ToDoGroup from '../Component/ToDoGroup';

const mapStateToProps = state => ({
    toDoList: state.toDoList.filter(item=>item.done)
});


const ToDoGroupContainer = connect(mapStateToProps)(ToDoGroup);
export default ToDoGroupContainer;