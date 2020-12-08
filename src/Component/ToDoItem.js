import React, { Component } from 'react';
import '../Style/ToDoItemStyle.css';

class ToDoItem extends Component {
    updateDoneStatus=(id)=>{
       this.props.changeDoneStatus(id);
       console.log("change");

    }
    deleteItem = () => {
       this.props.deleteToDo(this.props.data.id)
    }


    render() {
        const todo = this.props.data;
        console.log("ck render");
        console.log(todo);
        console.log(todo.done);
        return (
            <div> 
               <span>
                    <label onClick={()=>this.updateDoneStatus(todo.id)}> 
                            {todo.done?(<s>{todo.text}</s>) : todo.text} 
                    </label>
                    
                    <button onClick={this.deleteItem}> x </button>
                </span>
            </div>
        );
    }
}

export default ToDoItem;