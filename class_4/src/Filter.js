import React from 'react';
import PropTypes from 'prop-types';

import './Filter.css';

function Filter(props) {
  return (
    <div className="Filter">
      <span className="Filter-label">Filter: </span>      
      <input
        onChange={props.onChange}
        value={props.filterValue}
        className="Filter-input"
      />
    </div>      
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Filter;
