import React, { Component } from 'react';

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state ={
            toDoMsg:''
        }
        
    }
    handleAddToDo=()=>{
        console.log("add");
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