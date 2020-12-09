import React, { Component } from 'react';
import { getTodoList } from '../apis/todos';
import ToDoItemContainer from '../Container/ToDoItemContainer';


class ToDoGroup extends Component {

    componentDidMount=()=>{
        getTodoList().then(response=>{
            this.props.initTodoList(response.data);
            console.log(response.data);
        })
        
    }

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