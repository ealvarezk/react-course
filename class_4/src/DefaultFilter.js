import React from 'react';
import PropTypes from 'prop-types';

function DefaultFilter({value, activeFilter, onDefaultFilterChange, label}) {
  const handleClick = () => {
    onDefaultFilterChange(value);
  };

  return (
        <button
          disabled={value === activeFilter}
          onClick={handleClick}
          style={{
            margin: '0 3px'
          }}
        >
          {label}
        </button>
  );
}

DefaultFilter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onDefaultFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default DefaultFilter;
