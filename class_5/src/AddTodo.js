import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './AddTodo.css';

function AddTodo({ onAddTodo }) {
  const [ value, setValue ] = useState('');

  const handleChange = useCallback(({ target: { value: newValue } }) => {
    setValue(newValue);
  }, []);

  const handleClick = useCallback(() => {
    onAddTodo(value);
    setValue('');
  },[onAddTodo, value])

  return (
      <div className="AddTodo">
        <input className="AddTodo-input" value={value} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
  );
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}

export default React.memo(AddTodo);
