import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../actions/actions';

class Todo extends React.Component {
    state = {
        newTodo: ''
    }

    handleChanges = e => {
        this.setState({ newTodo: e.target.value })
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ''})
    }

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index)
    }

    removeTodo = (e, index) => {
        e.preventDefault();
        this.props.removeTodo(index)
    }

    render() {
        return(
            <div>
                <h1>Todo List</h1>
                <div>
                    {this.props.todos.map((todo, index) => (
                        <div>
                            <h4
                            className = {todo.completed ? 'completed' : ''}
                            onClick = {e => this.toggleTodo(e, index)}
                            key={index}
                            >
                                {todo.value}
                            </h4>
                        </div>
                        
                    ))}
                </div>
                <form onSubmit={this.addTodo}>
                    <input
                    type="text"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    />
                    <button onClick={this.addTodo}>Add Todo</button>
                </form>
                <button onClick={this.removeTodo}>Clear Completed</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    { addTodo, toggleTodo, removeTodo }
)(Todo)