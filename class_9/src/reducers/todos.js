const initialState = [];

export default function(state = initialState, action) {    
    switch (action.type) {
        case 'TODOS_INITIALIZE':
            return action.todos;
        case 'TODOS_ADD':
            return [
                ...state,
                { completed: false, description: action.description },
            ];
        case 'TODOS_MODIFY':
            const newTodos = [...state];
            newTodos[action.index] = action.todo;
            return newTodos;
        default:
            return state;
    }
}