const initialState = 'all';

export default function(state = initialState, action) {
    switch (action.type) {
        case 'DEFAULT_FILTER_MODIFY':
            return action.defaultFilter;
        default:
            return state;
    }
}