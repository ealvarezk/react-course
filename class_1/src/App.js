import React from 'react';
import Filter from './Filter';
import AddTodo from './AddTodo';
import Todos from './Todos';
import DefaultFilters from './DefaultFilters';

const args = {
    filterValue: 'filter value',
    addTodo: 'ir al super',
    todos: [
        { completed: true, description: 'Buy bicycle'},
        { completed: false, description: 'Finish react course'},
        { completed: false, description: 'Learn something'},
    ],
    activeDefaultFilter: 'all',
};

function App() {
  return (
      <div>
          <Filter filterValue={args.filterValue}/>
          <AddTodo addTodo={args.addTodo}/>
          <Todos todos={args.todos}/>
          <DefaultFilters activeFilter={args.activeDefaultFilter}/>
      </div>
  );
}

export default App;
