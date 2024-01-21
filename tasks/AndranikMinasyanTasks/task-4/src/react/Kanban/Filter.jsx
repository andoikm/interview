import React from "react";

const Filter = ({ value, setValue }) => {
  return (
    <div className="container filter-container">
      <div>Filter</div>
      <input value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
};

export default Filter;