import React from 'react';
import PropTypes from 'prop-types';

function AddTodo(props) {
  return (
      <div>
        <input value={props.addTodo}/>
        <button>Add</button>
      </div>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.string,
}

export default AddTodo;
