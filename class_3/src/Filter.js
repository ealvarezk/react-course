import React from 'react';
import PropTypes from 'prop-types';

function Filter(props) {
  return (
    <div>
      <span>Filter: </span>      
      <input
        onChange={props.onChange}
        value={props.filterValue}
      />
    </div>      
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Filter;
