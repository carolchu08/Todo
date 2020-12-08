import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoGroup extends Component {


    render() {
        const { toDoList } = this.props;
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