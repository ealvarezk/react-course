import { combineReducers } from 'redux';

import activeDefaultFilter from './activeDefaultFilter';
import todos from './todos';

export default combineReducers({
    activeDefaultFilter,
    todos,
});