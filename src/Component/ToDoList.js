import React, { Component } from 'react';
import ToDoGeneratorContainer from '../Container/ToDoGeneratorContainer';
import ToDoGroupContainer from '../Container/ToDoGroupContainer';

class ToDoList extends Component {
    render() {
        return (
            <div>
                <h1>
                    ToDoList
                </h1>
                <ToDoGroupContainer />
                <ToDoGeneratorContainer />
            
            </div>
        );
    }
}

export default ToDoList;