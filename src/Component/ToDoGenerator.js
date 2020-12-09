import React, { Component } from 'react';
import { Button } from 'antd';
import { addNewTodo } from '../apis/todos';
import { Select } from 'antd';


const { Option } = Select;

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoMsg: '',
            category: []
        }

    }
    handleToDoMsgChange = (event) => {
        this.setState({
            toDoMsg: event.target.value,

        });
    }
    handleAddToDo = () => {
        addNewTodo(this.state.toDoMsg, this.state.category).then(response => {
            this.props.createToDo(response.data);
        })
        this.setState({
            toDoMsg: '',
            category: []
        });
    }
    handleChange = (value) => {
        this.setState({
            category: value
        })
    }



    render() {
        const children = [];
        const toDotype = ["Food", "Drink", "Shopping", "Travelling", "Everyday", "Trasportation", "Country", "Other"];
        for (let i = 0; i < toDotype.length; i++) {
            children.push(<Option key={toDotype[i]}>{toDotype[i]}</Option>);

        }

        return (
            <div>
                <>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{
                            width: '80%',

                        }}
                        placeholder="Please select the categories for your todo"
                        defaultValue={[]}
                        onChange={this.handleChange}
                    >
                        {children}
                    </Select>
                    <br />
                </>
                <input type="text" value={this.state.toDoMsg} placeholder="input a new todo here..." onChange={this.handleToDoMsgChange} />
                <Button type="primary" onClick={this.handleAddToDo} disabled={this.state.toDoMsg === ''} shape="round">Add</Button>

            </div>
        );
    }
}

export default ToDoGenerator;