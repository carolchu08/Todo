import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state ={
            toDoMsg:''
        }
        
    }
    handleAddToDo=()=>{
        const newTodoItem = {
            id: uuidv4(), 
           text: this.state.toDoMsg,
           done: false,
        };
        console.log(`${JSON.stringify(newTodoItem, null, 4)}`);
    }
    
    render() {
        return (
            <div>
                <input type="text" id="inputid" className= "input_new_todo" placeholder="input a new todo here..."/>
                <button onClick={this.handleAddToDo}>Add</button>
            </div>
        );
    }
}

export default ToDoGenerator;