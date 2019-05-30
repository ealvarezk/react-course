import React from 'react';
import PropTypes from 'prop-types';

function Todo({ completed, description, onChange }) {
  const handleChange = ({ target: { name, value, checked } }) => {
    const newValue = name === 'completed' ? checked : value;
    onChange({
      completed,
      description,
      [name]: newValue,
    })
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleChange}
        name="completed"
      />
      <input
        value={description}
        onChange={handleChange}
        name="description"
      />
    </li>      
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Todo;
