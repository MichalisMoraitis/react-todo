import React from 'react';
import Todo from './Todo'; 

class Todos extends React.Component{
    constructor(props){
        super(props)

        this.delete = this.delete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.newTodo = this.newTodo.bind(this);
        this.handleTodoCheck = this.handleTodoCheck.bind(this);
        this.changeOnlyUnckecked = this.changeOnlyUnckecked.bind(this);
        this.deleteCheckedTodos = this.deleteCheckedTodos.bind(this);
    }

    delete(id){
        this.props.delete(id);
    }

    handleChange(e){
        this.props.handleChange(e);
    }

    newTodo(){
        this.props.newTodo();
    }

    handleTodoCheck(e){
        this.props.handleTodoCheck(e);
    }

    changeOnlyUnckecked(e){
        this.props.changeOnlyUnckecked(e);
    }

    deleteCheckedTodos(){
        this.props.deleteCheckedTodos()
    }

    render(){
        const todos = this.props.todos;
        const inputText = this.props.inputText;
        const error = this.props.error;
        const onlyUnChecked = this.props.onlyUnChecked;
        const searchText = this.props.searchText;

        const count = todos.filter((todo) =>{
            if (todo.checked === true) return true;
            else return false;
        }).length;

        
        return(
            <div className='todos'>
                <div className='header'>
                    <label>Only Unckecked
                            <input type="checkbox" checked={onlyUnChecked} onChange={(e) => this.changeOnlyUnckecked(e)} />
                    </label>
                    <input autoFocus value={searchText} name="searchText" type="text" placeholder="Search" onChange={this.handleChange} ></input>
                </div>

                <div className='main'>
                    {todos.map(todo => (
                        <Todo key={todo.id} 
                            todo={todo} 
                            searchText={searchText} 
                            onlyUnChecked={onlyUnChecked} 
                            delete={this.delete.bind(this)} 
                            handleTodoCheck={this.handleTodoCheck.bind(this)}
                        />
                    ))}
                </div>


                <div className='footer'>
                    <input placeholder='Title' name='inputText' value={inputText} onChange={this.handleChange}></input>
                    <button id='new' className='button' onClick={this.newTodo}>New Todo</button>
                    <p>Done {count} of {todos.length} todos</p>
                    <button className='button' onClick={this.deleteCheckedTodos}>Delete checked todos</button>
                </div>

                {error && <span className='error'>
                    <span className="material-symbols-outlined">error</span>
                    {error}
                </span>}
                
            </div>
        )
    }
}

export default Todos;