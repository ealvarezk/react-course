import React from 'react';
import Todo from './Todo';

function Todos(props) {
  return (
    <ul>
      {props.todos.map(todo => <Todo completed={todo.completed} description={todo.description} />)}
    </ul>      
  );
}

export default Todos;
