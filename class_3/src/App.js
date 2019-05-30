import React, { Component } from "react";
import Filter from "./Filter";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import DefaultFilters from "./DefaultFilters";

class App extends Component {
  state = {
    filterValue: '',
    todos: [],
    activeDefaultFilter: "all"
  };

  handleFilterValueChange = ({ target: { value } }) => {
    this.setState({
      filterValue: value
    });
  };

  handleAddTodo = (description) => {
    this.setState(state => {
      const { todos } = state;
      todos.push({ completed: false, description });
      return {
        todos,
      };
    });
  }

  handleTodosChange = (values, index) => {
    this.setState(state => {
      const { todos } = state;
      todos[index] = values;
      return {
        todos,
      };
    });
  };

  handleDefaultFilterChange = (activeDefaultFilter) => {
    this.setState({
      activeDefaultFilter,
    });
  }

  getFilteredTodos = () => {
    const { filterValue, todos, activeDefaultFilter } = this.state;
    const filterValueRegex = new RegExp(filterValue, 'i');
    return todos.filter(todo => (
      (
        (todo.completed && activeDefaultFilter === 'completed') ||
        (!todo.completed && activeDefaultFilter === 'active') ||
        activeDefaultFilter === 'all'
      ) && (!filterValue || filterValueRegex.test(todo.description))
    ))
  }

  render() {
    const { filterValue, activeDefaultFilter } = this.state;
    return (
      <div>
        <Filter filterValue={filterValue} onChange={this.handleFilterValueChange} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
        <Todos todos={this.getFilteredTodos()} onChange={this.handleTodosChange} />
        <DefaultFilters activeFilter={activeDefaultFilter} onDefaultFilterChange={this.handleDefaultFilterChange}/>
      </div>
    );
  }
}

export default App;
