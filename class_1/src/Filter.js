import React from 'react';

function Filter(props) {
  return (
    <div>
      <span>Filter: </span>      
      <input value={props.filterValue}/>
    </div>      
  );
}

export default Filter;
