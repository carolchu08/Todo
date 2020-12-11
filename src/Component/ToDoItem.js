import React, { Component } from 'react';
import { deleteTodo, updateDoneStatus } from '../apis/todos';
import { DeleteTwoTone } from '@ant-design/icons';
import '../Style/ToDoItemStyle.css';
import { Tag } from "antd";
const color = {
    Food: "IndianRed",
    Drink: "LightSeaGreen",
    Shopping: "LightSteelBlue",
    Travelling: "MediumAquaMarine",
    Everyday: "Pink",
    Trasportation: "Plum",
    Country: "PaleVioletRed",
    Other: "GreenYellow"


}
class ToDoItem extends Component {


    
    updateDoneStatus = (todo) => {
        const updatedDoneTodo ={
            ...todo,
            done: !todo.done
            };
        updateDoneStatus(updatedDoneTodo).then(response => {
            this.props.changeDoneStatus(response.data.id)
        })

    }

    deleteItem = () => {
        deleteTodo(this.props.data.id).then(response => {
            this.props.deleteToDo(this.props.data.id)

        })
    }

    render() {
        const todo = this.props.data;
        console.log(todo);
        console.log(todo.todoLabels) ;
        return (
            <div className='todoItem'>
                <span>
                    <label onClick={() => this.updateDoneStatus(todo)}>
                        {todo.done ? (<s>{todo.text}</s>) : todo.text}
                    </label>
                    <DeleteTwoTone className='button' onClick={this.deleteItem} />
                 
                    { 
                   
                     todo.todoLabels && todo.todoLabels.length>0?
                        todo.todoLabels.map(item => <label className="toDoItemLabel" key= {item.id}><Tag color={color[item.labelName]}>{item.labelName}</Tag></label>):[]
                    }



                </span>
            </div>
        );
    }
}

export default ToDoItem;