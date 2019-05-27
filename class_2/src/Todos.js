import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

function Todos(props) {
  return (
    <ul>
      {props.todos.map(todo => <Todo completed={todo.completed} description={todo.description} />)}
    </ul>      
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired
}

export default Todos;
