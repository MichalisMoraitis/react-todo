// import React, {Component} from 'react';
import React from 'react';
import Todos from './Todos';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {title: 'read the book', id: 1, checked:true},
                {title: 'buy dog food', id: 2, checked:false},
            ],
            searchText: '',
            inputText: '',
            lastId: 2,
            onlyUnChecked: false,
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.newTodo = this.newTodo.bind(this); 
        this.delete = this.delete.bind(this);
        this.handleTodoCheck = this.handleTodoCheck.bind(this);
        this.changeOnlyUnckecked = this.changeOnlyUnckecked.bind(this);
        this.deleteCheckedTodos = this.deleteCheckedTodos.bind(this);
    }

    handleChange(e) {
        const newValue = e.target.value;
        this.setState({
            [e.target.name]: newValue
        });
    }

    newTodo(){
        const todos = this.state.todos;
        const newTitle = this.state.inputText;
        const newId = this.state.lastId+1;
        const newtodo = {title: newTitle, id: newId, checked:false};
        if (newTitle.length < 3 || newTitle.length > 20){
            this.setState({
                error: "the todo should be from 3 to 20 letters"
            });
            return null
        }
        this.setState({
            todos: [...todos, newtodo],
            inputText: "",
            lastId: newId,
            error: null
        });
    }

    delete(id){
        const todos = this.state.todos;
        const newTodos = todos.filter((todo) => todo.id !== id);
        this.setState({
            todos: newTodos
        });
    }

    handleTodoCheck(e){
        const todos = this.state.todos;
        const id = parseInt(e.target.name);
        const checked = e.target.checked;

        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.checked = checked;
                return todo
            }else{
                return todo
            }
        });
        this.setState({
            todos: newTodos
        });
    }

    changeOnlyUnckecked(e){
        const checked = e.target.checked;
        this.setState({
            onlyUnChecked: checked
        });
    }

    deleteCheckedTodos(){
        const todos = this.state.todos;
        const newTodos = todos.filter((todo) => todo.checked === false);
        this.setState({
            todos: newTodos
        });
    }
    
    render() {
        const todos = this.state.todos;
        const inputText = this.state.inputText;

        return (
            <div className="App">
                <div className='content'>  
                    <h1>Todolist</h1>    
                    <Todos todos={todos}
                        onlyUnChecked={this.state.onlyUnChecked}
                        error={this.state.error}
                        inputText={inputText}
                        searchText={this.state.searchText}
                        delete={this.delete} 
                        handleChange={this.handleChange} 
                        newTodo={this.newTodo}
                        handleTodoCheck={this.handleTodoCheck}
                        changeOnlyUnckecked={this.changeOnlyUnckecked}
                        deleteCheckedTodos={this.deleteCheckedTodos}
                    />
                    <p className='copyright'>Copyright © 2023 todolist</p>
                </div>
            </div>
        );
    }
}

export default App;