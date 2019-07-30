export const getTodosRequest = () => ({
    type: 'TODOS_REQUEST',
});

export const getTodosSuccesfull = (todos) => ({
    type: 'TODOS_SUCCESS',
    todos,
});

export const getTodosFailure = (error) => ({
    type: 'TODOS_FAILURE',
    error,
});

export const addTodo = (description) => ({
    type: 'TODOS_ADD',
    description,
});

export const modifyTodo = (todo, index) => ({
    type: 'TODOS_MODIFY',
    todo,
    index,
});