import React from 'react';
import DefaultFilter from './DefaultFilter';

function DefaultFilters(props) {
  return (
    <div>
        <span>Show: </span>
        <DefaultFilter label="All" value="all" activeFilter={props.activeFilter} />
        <DefaultFilter label="Active" value="active" activeFilter={props.activeFilter} />
        <DefaultFilter label="Completed" value="completed" activeFilter={props.activeFilter} />
    </div>      
  );
}

export default DefaultFilters;
