import React from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
  return (
    <li>
      <input type="checkbox" checked={props.completed} />
      {props.description}
    </li>      
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
}

export default Todo;
