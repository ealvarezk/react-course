import React from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

function Todo({ completed, description, onChange, index }) {
  const handleChange = ({ target: { name, value, checked } }) => {
    const newValue = name === 'completed' ? checked : value;
    onChange({
      completed,
      description,
      [name]: newValue,
    }, index)
  };

  return (
    <li className="Todo">
      <input
        type="checkbox"
        checked={completed}
        onChange={handleChange}
        name="completed"
      />
      <input
        className={`Todo-description ${completed ? 'Todo-description_completed' : ''}`}
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
  index: PropTypes.number.isRequired,
}

export default React.memo(Todo);
