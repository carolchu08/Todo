import React, { Component } from 'react';
import ToDoItemContainer from '../Container/ToDoItemContainer';


class ToDoGroup extends Component {


    render() {
        const { toDoList } = this.props;
        return (
            <div className='todoGroup'>
                {
                   toDoList.map(item => <ToDoItemContainer key={item.id} data={item} />)
                }
                
            </div>
        );
    }
}

export default ToDoGroup;