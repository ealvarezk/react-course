import React from 'react';

function AddTodo(props) {
  return (
      <div>
        <input value={props.addTodo}/>
        <button>Add</button>
      </div>
  );
}

export default AddTodo;
