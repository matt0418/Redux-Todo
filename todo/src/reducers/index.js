import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/actions';

const initialState = {
    todos: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
        const newTodo = {
            value: action.payload,
            completed: false
        }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    return action.payload === index ? {...todo, completed: !todo.completed} : todo;
                })
            }

        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return todo.completed === false;
                })
            }    
            
        default:
            return state
    }
}

export default reducer