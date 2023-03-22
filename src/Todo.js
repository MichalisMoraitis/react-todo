import React from 'react';
import TodoTitle from './TodoTitle';

class Todo extends React.Component{
    constructor(props){
        super(props)
        this.todo = this.props.todo;
        this.delete = this.delete.bind(this);
        this.handleTodoCheck = this.handleTodoCheck.bind(this);
    }

    delete(id) {
        this.props.delete(id);
    }

    handleTodoCheck(e) {
        this.props.handleTodoCheck(e);
    }

    render(){
        const todo = this.props.todo;
        const onlyUnChecked = this.props.onlyUnChecked;
        const searchText = this.props.searchText;
        
        if(onlyUnChecked && todo.checked === true)return null
        
        if(searchText !== ""){
            if(todo.title.indexOf(searchText) === -1)return null
        }

        return(
            <div className='todo'>
                {todo.id}
                <input name={todo.id} type="checkbox" checked={todo.checked} onChange={(e) => {this.handleTodoCheck(e)}}/>
                <div className='title'>
                    <TodoTitle title={todo.title} searchText={searchText}/>
                </div>
                <button className='button' onClick={() => {this.delete(todo.id)}}>Delete</button> 
            </div>
        )
    }
}


export default Todo;