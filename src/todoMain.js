import React, { Component } from 'react';
import './todoMain.css';
import TodoItems from './todoItems';
class TodoMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items:[]
         }
         this.deleteItems = this.deleteItems.bind(this)
    }

    addItems = e => {
        e.preventDefault();
        const inputVal = this.taskInput.value
        if (!inputVal) return alert(" Please enter the task ! ")
        const newItem = { text:this.taskInput.value, key:Date.now() }
        this.setState( prevState => ({ items :[ ...prevState.items,newItem] }))
        this.taskInput.value = ''

    }
    deleteItems = key => {
        let filetrItems =this.state.items.filter(remainList => remainList.key !== key);
        this.setState({
            items:filetrItems
        })
    }
    render() {  
        return (
            <div className="todoMain"> 
                <h1>React to-do-list</h1>
                <form onSubmit={this.addItems} className="todoForm">
                    <input
                        ref={input =>this.taskInput = input } 
                        placeholder="enter task" 
                        type="text" 
                    />
                    <button type="submit">Add</button>
                </form>           
                <TodoItems list={this.state.items} deleteItems={this.deleteItems} />
            </div>
          );
    }
}
 
export default TodoMain;