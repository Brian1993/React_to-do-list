import React, { Component } from 'react';
import FlipMove from 'react-flip-move';


class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    
    }
    
    /////////////////////
    ///    function
    /////////////////////
    delete = (key) =>{
        this.props.deleteItems(key);  //父層的callback,把要刪掉的list的key傳回去
    }

    makeList =(listData) => {
        return  <li  className="list" key={listData.key}>  
                    {listData.text}
                    <div className="delete_icon" onClick={()=> this.delete(listData.key)}>
                        <i class="fas fa-trash-alt"></i>
                    </div>
                </li>
    }
    /////////////////////
    ///    render
    /////////////////////
    render() { 
        let listData = this.props.list;
        let todoList = listData.map(this.makeList)
 
        return (
            <ol className="todoItems">
               <FlipMove >
                    {todoList}
               </FlipMove>
              
   
            </ol>
          );
    }
}
 
export default TodoItems;