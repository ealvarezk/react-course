import React from 'react';
import DefaultFilter from './DefaultFilter';
import PropTypes from 'prop-types';

function DefaultFilters(props) {
  return (
    <div>
        <span>Show: </span>
        <DefaultFilter label="All" value="all" {...props} />
        <DefaultFilter label="Active" value="active" {...props} />
        <DefaultFilter label="Completed" value="completed" {...props} />
    </div>      
  );
}

DefaultFilters.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  onDefaultFilterChange: PropTypes.func.isRequired,
}

export default DefaultFilters;
