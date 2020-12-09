import React, { Component } from 'react';
import ToDoGeneratorContainer from '../Container/ToDoGeneratorContainer';
import ToDoGroupContainer from '../Container/ToDoGroupContainer';
import '../Style/ToDoListStyle.css';
import '../Style/TodoStyle.css';

class ToDoList extends Component {
    render() {
        return (
            <div className="todo">
                <h1 className='todolist'>
                    ToDoList
                </h1>
                <div className="todogroup">
                    <ToDoGroupContainer />
                </div>
                <ToDoGeneratorContainer />

            </div>
        );
    }
}

export default ToDoList;