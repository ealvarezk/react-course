import React, { useState, useCallback, useMemo, useEffect } from "react";
import Filter from "./Filter";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import DefaultFilters from "./DefaultFilters";

import './App.css';

function App() {
  const [ filterValue, setFilterValue ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ activeDefaultFilter, setActiveDefaultFilter ] = useState('all');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(function(response) {
        return response.json();
      })
      .then(function(newTodos) {
        setTodos(newTodos.map(({completed, title}) => ({
          completed,
          description: title,
        })));
      });
  }, []);

  const handleFilterValueChange = useCallback(({ target: { value } }) => {
    setFilterValue(value);
  },[]);

  const handleAddTodo = useCallback((description) => {
    setTodos(oldTodos => (
      [...oldTodos, { completed: false, description }]
    ));
  }, []);

  const handleTodosChange = useCallback((values, index) => {
    setTodos(oldTodos => {
      const newTodos = [...oldTodos];
      newTodos[index] = values;
      return newTodos;
    });
  }, []);

  const handleDefaultFilterChange = useCallback((newActiveDefaultFilter) => {
    setActiveDefaultFilter(newActiveDefaultFilter);
  }, []);

  const filteredTodos = useMemo(() => {
    const filterValueRegex = new RegExp(filterValue, 'i');
    return todos.filter(todo => (
      (
        (todo.completed && activeDefaultFilter === 'completed') ||
        (!todo.completed && activeDefaultFilter === 'active') ||
        activeDefaultFilter === 'all'
      ) && (!filterValue || filterValueRegex.test(todo.description))
    ))
  }, [filterValue, todos, activeDefaultFilter]);

  return (
    <div className="App">
      <Filter filterValue={filterValue} onChange={handleFilterValueChange} />
      <AddTodo onAddTodo={handleAddTodo}/>
      <Todos todos={filteredTodos} onChange={handleTodosChange} />
      <DefaultFilters activeFilter={activeDefaultFilter} onDefaultFilterChange={handleDefaultFilterChange}/>
    </div>
  );
}

export default App;
