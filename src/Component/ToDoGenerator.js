import React, { Component } from 'react';
import { Button } from 'antd';
import { addNewTodo } from '../apis/todos';
import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const { Option } = Select;

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoMsg: '',
            category: [],
            name: '',
            toDotype: ["Food", "Drink", "Shopping", "Travelling", "Everyday", "Trasportation", "Country", "Other"]

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
    onNameChange = event => {
        this.setState({
            name: event.target.value,
        });
    };
    addItem = () => {
        console.log('addItem');
        const { toDotype, name } = this.state;
        this.setState({
            toDotype: [...toDotype,name],
            name: '',
        });
    };



    render() {
        const children = [];
        const { toDotype } = this.state;
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
                        dropdownRender={menu => (
                            <div>
                                {menu}
                                <Divider style={{ margin: '4px 0' }} />
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input style={{ flex: 'auto' }} value={this.state.name} onChange={this.onNameChange} />
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={this.addItem}
                                    >
                                        <PlusOutlined /> Add item
                                </a>
                                </div>
                            </div>
                        )}
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