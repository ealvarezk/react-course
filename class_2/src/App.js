import React, { Component } from 'react';
import Filter from './Filter';
import AddTodo from './AddTodo';
import Todos from './Todos';
import DefaultFilters from './DefaultFilters';

class App extends Component {
  state = {
      filterValue: 'filter value',
      addTodo: 'ir al super',
      todos: [
          { completed: true, description: 'Buy bicycle'},
          { completed: false, description: 'Finish react course'},
          { completed: false, description: 'Learn something'},
      ],
      activeDefaultFilter: 'all',
  };

  render() {
      const { filterValue, addTodo, todos, activeDefaultFilter } = this.state;
        return (
            <div>
                <Filter filterValue={filterValue}/>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos}/>
                <DefaultFilters activeFilter={activeDefaultFilter}/>
            </div>
        );
  }
}

export default App;
