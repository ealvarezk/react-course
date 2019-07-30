const initialState = {
    items: [],
    isFetching: false,
    error: '',
};

export default function(state = initialState, action) {  
    console.log(action);
      
    switch (action.type) {
        case 'TODOS_INITIALIZE':
            return {
                ...state,
                items: action.todos
            };                
        case 'TODOS_ADD':
            return {
                ...state,
                items: [
                    ...state.items,
                    { completed: false, description: action.description },
                ]
            };
        case 'TODOS_MODIFY':
            const newTodos = [...state.items];
            newTodos[action.index] = action.todo;
            return {
                ...state,
                items: newTodos
            };
        case 'TODOS_REQUEST':
            return {
                ...state,
                isFetching: true,
            };
        case 'TODOS_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        case 'TODOS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                items: action.todos
            };
        default:
            return state;
    }
}