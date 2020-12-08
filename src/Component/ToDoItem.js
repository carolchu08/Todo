import React, { Component } from 'react';

class ToDoItem extends Component {
    changeDoneStatus=()=>{
        if(this.props.data.done){
           console.log('not done');
        }else{
            console.log('done');
        }

    }
    deleteItem = () => {
        console.log(`going to delete ${this.props.data.id}`);
    }


    render() {
        const {text, done} = this.props.data;
        return (
            <div>
               <span>
                    <p> {done ? 'should be done' : 'not done'} </p>
                    <p onClick={this.changeDoneStatus}> {text} {' '}
                    <button onClick={this.deleteItem}> x </button>
                    </p>
                </span>
            </div>
        );
    }
}

export default ToDoItem;