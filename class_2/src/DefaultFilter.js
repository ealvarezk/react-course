import React from 'react';
import PropTypes from 'prop-types';

function DefaultFilter({value, activeFilter, label}) {
  return (
        <button disabled={value === activeFilter}>{label}</button>
  );
}

DefaultFilter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default DefaultFilter;
