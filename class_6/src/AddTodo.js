import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import './AddTodo.css';

function AddTodo({ onAddTodo }) {
  const [ value, setValue ] = useState('');
  const inputRef = useRef(null);

  const handleChange = useCallback(({ target: { value: newValue } }) => {
    setValue(newValue);
  }, []);

  const handleClick = useCallback(() => {
    onAddTodo(value);
    setValue('');
    inputRef.current.focus();
  },[onAddTodo, value])

  return (
      <div className="AddTodo">
        <input
          className="AddTodo-input"
          value={value}
          onChange={handleChange}
          ref={inputRef}
        />
        <button onClick={handleClick}>Add</button>
      </div>
  );
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}

export default React.memo(AddTodo);
