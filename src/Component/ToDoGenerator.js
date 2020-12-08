import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoMsg: ''
        }

    }
    handleToDoMsgChange = (event) => {
        this.setState({
            toDoMsg: event.target.value
        });
    }
    handleAddToDo = () => {
        const newToDoItem = {
            id: uuidv4(),
            text: this.state.toDoMsg,
            done: false,
        };
        this.props.createToDo(newToDoItem);
    }

    render() {
        return (
            <div>
                <input type="text" id="inputid" className="input_new_todo" placeholder="input a new todo here..." onChange={this.handleToDoMsgChange} />
                <button onClick={this.handleAddToDo}>Add</button>
            </div>
        );
    }
}

export default ToDoGenerator;