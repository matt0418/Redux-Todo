export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export function addTodo(newTodo) {
    console.log(newTodo);
    return {
        type: ADD_TODO,
        payload: newTodo
    };
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        payload: index
    }
}

export function removeTodo(index) {
    return {
        type: REMOVE_TODO,
        payload: index
    }
}