import React, { Component } from 'react';
import ToDoItemContainer from '../Container/ToDoItemContainer';
import '../Style/DoneListStyle.css';

class DoneList extends Component {
    render() {
        const { toDoList } = this.props;
        return (
            <div >
                <h1 className="doneList">Done List</h1>
                {
                    toDoList.map(item => <ToDoItemContainer key={item.id} data={item} />)
                }

            </div>
        );
    }
}

export default DoneList;