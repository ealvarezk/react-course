import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import { getTodos, addTodo } from '../actions/todos';
import Filter from "../Filter/Filter";
import AddTodo from "../AddTodo/AddTodo";
import Todos from "../Todos/Todos";
import DefaultFilters from "../DefaultFilters/DefaultFilters";

import './App.css';

function App({
  todos,
  activeDefaultFilter,
  getTodos,
  addTodo,
}) {
  const [ filterValue, setFilterValue ] = useState('');
  const [ newTodoJustAdded, setNewTodoJustAdded ] = useState(false);
  const ulRef = useRef(null);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  useEffect(() => {
    if (newTodoJustAdded) {
      ulRef.current.scrollTop = ulRef.current.scrollHeight;
      setNewTodoJustAdded(false);
    }
  }, [newTodoJustAdded])

  const handleFilterValueChange = useCallback(({ target: { value } }) => {
    setFilterValue(value);
  },[]);

  const handleAddTodo = useCallback((description) => {
    addTodo(description);
    setNewTodoJustAdded(true);
  }, [addTodo]);

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
      <Todos todos={filteredTodos} ulRef={ulRef} />
      <DefaultFilters activeFilter={activeDefaultFilter}/>
    </div>
  );
}

export default connect(
  (state) => ({
    todos: state.todos.items,
    activeDefaultFilter: state.activeDefaultFilter,
  }),
  {
    getTodos,
    addTodo,
  }
)(App);
