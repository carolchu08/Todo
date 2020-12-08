import React, { Component } from 'react';
import ToDoGenerator from './ToDoGenerator';
import ToDoGroup from './ToDoGroup';

class ToDoList extends Component {
    render() {
        return (
            <div>
                <h1>
                    ToDoList
                </h1>
                <ToDoGenerator />
                <ToDoGroup />
            </div>
        );
    }
}

export default ToDoList;