import React, { Component } from 'react';
import { deleteTodo,updateDoneStatus } from '../apis/todos';
import '../Style/ToDoItemStyle.css';

class ToDoItem extends Component {
    updateDoneStatus = (id) => {
        updateDoneStatus(this.props.data.id).then(response=>{
            this.props.changeDoneStatus(response.data.id);

        })

    }
    deleteItem = () => {
        deleteTodo(this.props.data.id).then(response=>{
            this.props.deleteToDo(response.data.id)

        })
    }


    render() {
        const todo = this.props.data;
        return (
            <div className='todoItem'>
                <span>
                    <label onClick={() => this.updateDoneStatus(todo.id)}>
                        {todo.done ? (<s>{todo.text}</s>) : todo.text}
                    </label>

                    <button className='button' onClick={this.deleteItem}> x </button>
                </span>
            </div>
        );
    }
}

export default ToDoItem;