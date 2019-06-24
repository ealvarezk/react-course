import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

import './Todos.css';

function Todos(props) {
  return (
    <ul className="Todos" ref={props.ulRef}>
      {props.todos.map((todo, index) => 
        <Todo
          key={index}
          completed={todo.completed}
          description={todo.description}
          onChange={props.onChange}
          index={index}
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
  ulRef: PropTypes.object,
}

export default React.memo(Todos);
