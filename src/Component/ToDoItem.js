import React, { Component } from 'react';

class ToDoItem extends Component {
    changeDoneStatus=()=>{
        if(this.props.data.done){
           this.props.changeToNotDoneStatus(this.props.data.id);
        }else{
            this.props.changeToDoneStatus(this.props.data.id);
        }

    }
    deleteItem = () => {
       this.props.deleteToDo(this.props.data.id)
    }


    render() {
        const {text, done} = this.props.data;
        return (
            <div>
               <span>
                    <p onClick={this.changeDoneStatus}> {text}  {' '}
                    <button onClick={this.deleteItem}> x </button>
                    </p>
                </span>
            </div>
        );
    }
}

export default ToDoItem;