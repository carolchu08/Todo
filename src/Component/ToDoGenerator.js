import React, { Component } from 'react';
import { Button } from 'antd';
import { addNewTodo} from '../apis/todos';
import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getTodoLabelList, addNewTodoLabel,deleteTodoLabel } from '../apis/todoLabel';


const { Option } = Select;

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todoLabels: [],
            labelName: '',
            color: 'pink'
        }

    }
    handleToDoMsgChange = (event) => {
        this.setState({
            text: event.target.value,

        });
    }
    handleAddToDo = () => {
       
        addNewTodo(this.state.text, this.state.todoLabels).then(response => {

            this.props.createToDo(response.data);
        })
        this.setState({
            text: '',
            todoLabels: []
        });
    }
    handleChange = (value) => {
        const label= this.props.toDoLabelList.filter(item=>value.includes(item.labelID))
        this.setState({
            todoLabels:label
        })
    }
    onNameChange = event => {
        this.setState({
            labelName: event.target.value,
        });
    };
    addItem = () => {
        // console.log("add");
        const label = {
            labelName: this.state.labelName,
            color: this.state.color
        }
        addNewTodoLabel(label).then(response => {
            this.props.createToDoLabel(response.data)
        })
    };
    deleteItem = () => {
        const deleteLabel=this.props.toDoLabelList.filter(item=>(item.labelName===this.state.labelName))
        deleteTodoLabel(deleteLabel[0].labelID).then(response => {
            console.log(deleteLabel[0].labelID);
            this.props.deleteTodoLabel(deleteLabel[0].labelID)

        })
    };
    componentDidMount = () => {
        getTodoLabelList().then(response => {
            this.props.initTodoLabelList(response.data);
        })

    }



    render() {
        const { toDoLabelList } = this.props

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
                                    <Input style={{ flex: 'auto' }} value={this.state.labelName} onChange={this.onNameChange} />
                                    <a href
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={this.addItem}
                                    >
                                        <PlusOutlined /> Add item
                                </a>
                                <a href
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={this.deleteItem}
                                    >
                                        <PlusOutlined /> delete item
                                </a>
                                </div>
                            </div>
                        )}
                        defaultValue={[]}
                        onChange={this.handleChange}
                    >
                        {
                            toDoLabelList.map(item => <Option key={item.labelID}>{item.labelName}</Option>)
                        }
                  
                    </Select>
                    <br />
                </>
                <input type="text" value={this.state.text} placeholder="input a new todo here..." onChange={this.handleToDoMsgChange} />
                <Button type="primary" onClick={this.handleAddToDo} disabled={this.state.text === ''} shape="round">Add</Button>

            </div>
        );
    }
}

export default ToDoGenerator;