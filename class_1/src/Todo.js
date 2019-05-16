import React from 'react';

function Todo(props) {
  return (
    <li>
      <input type="checkbox" checked={props.completed} />
      {props.description}
    </li>      
  );
}

export default Todo;
