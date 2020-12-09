import { connect } from 'react-redux';
import DoneList from '../Component/DoneList';

const mapStateToProps = state => ({
    toDoList: state.toDoList.filter(item=>item.done)
});


const ToDoGroupContainer = connect(mapStateToProps)(DoneList);
export default ToDoGroupContainer;