import React, { useEffect, useState } from 'react';
import './search.css';

const Search = ({ cb = Function.prototype }) => {

  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if(e.key === 'Enter'){
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };



  return (
    <>
      <input
        type="search"
        className="form-control"
        id="search"
        placeholder="Search..."
        aria-label="Search"
        onKeyDown={ handleKey }
        onChange={ (e) => setValue(e.target.value) }
        value={value}
      />
      {/* <button 
        className="btn btn-outline-success mx-2"
        type="button"
        onClick={handleSubmit}
      >Search</button> */}
    </>
  )
}

export default Search;
