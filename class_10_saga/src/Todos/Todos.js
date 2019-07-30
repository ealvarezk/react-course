import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { modifyTodo } from '../actions/todos';
import Todo from '../Todo/Todo';

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

export default connect(
  null,
  {
    onChange: modifyTodo,
  }
)(React.memo(Todos));
