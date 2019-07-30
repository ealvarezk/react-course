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

export const getTodos = () => (dispatch) => {
    dispatch(getTodosRequest());

    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then(function(newTodos) {
        dispatch(getTodosSuccesfull(newTodos.map(({completed, title}) => ({
          completed,
          description: title,
        }))));
      })
      .catch(error => dispatch(getTodosFailure(error.message)));
}