import React from 'react';

function DefaultFilters(props) {
  return (
        <button disabled={props.value === props.activeFilter}>{props.label}</button>
  );
}

export default DefaultFilters;
