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


    updateDoneStatus = (id, done) => {
        updateDoneStatus(id, !done).then(response => {
            this.props.changeDoneStatus(response.data.id, response.data.done)
        })

    }

    deleteItem = () => {
        deleteTodo(this.props.data.id).then(response => {
            this.props.deleteToDo(response.data.id)

        })
    }
    renderCategory = (category) => {
        let categoryArray = [];
        category.forEach(Item => {
            categoryArray.push(<label className="toDoItemLabel"><Tag color={color[Item]}>{Item}</Tag></label>)
        });
        return categoryArray;

    }


    render() {
        const todo = this.props.data;
        return (
            <div className='todoItem'>
                <span>
                    <label onClick={() => this.updateDoneStatus(todo.id, todo.done)}>
                        {todo.done ? (<s>{todo.text}</s>) : todo.text}
                    </label>
                    <DeleteTwoTone className='button' onClick={this.deleteItem} />
                    {this.renderCategory(todo.category)}


                </span>
            </div>
        );
    }
}

export default ToDoItem;