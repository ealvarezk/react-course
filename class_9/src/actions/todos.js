export const initializeTodos = (todos) => ({
    type: 'TODOS_INITIALIZE',
    todos,
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
