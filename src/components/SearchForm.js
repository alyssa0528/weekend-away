import React from 'react';

const SearchForm = (props) => {
  return (
    <div>
      <form>
        Enter city: <input type="text"></input>
        <button type="submit">Search!</button>
      </form>
    </div>
  )
}

export default SearchForm;
