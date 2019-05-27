import React from 'react';
import PropTypes from 'prop-types';

function Filter(props) {
  return (
    <div>
      <span>Filter: </span>      
      <input value={props.filterValue}/>
    </div>      
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string,
}

export default Filter;
