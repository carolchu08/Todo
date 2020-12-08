import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [
                {
                    "id": "38235104-e7df-4eb5-a349-3c87665dcc7c",
                    "text": "123",
                    "done": false
                }
            ]
        }
    }

    render() {
        const { toDoList } = this.state;
        return (
            <div>
                {
                    toDoList.map(item => <ToDoItem key={item.id} data={item} />)
                }
                
            </div>
        );
    }
}

export default ToDoGroup;