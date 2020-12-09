import React, { Component } from 'react';
import '../Style/ToDoItemStyle.css';

class ToDoItem extends Component {
    updateDoneStatus = (id) => {
        this.props.changeDoneStatus(id);
        console.log("change");

    }
    deleteItem = () => {
        this.props.deleteToDo(this.props.data.id)
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