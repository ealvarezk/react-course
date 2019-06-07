import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

import './Todos.css';

function Todos(props) {
  return (
    <ul className="Todos">
      {props.todos.map((todo, index) =>
        <Todo
          completed={todo.completed}
          description={todo.description}
          onChange={(values) => props.onChange(values, index)}
        />
      )}
    </ul>      
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Todos;
