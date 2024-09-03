import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

import './SearchBar.css'

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return ( 
    <form className="search_bar">
      <input 
        type="search"
        placeholder="Buscar produtos"
        className="search_input"
        onChange={ ({ target }) => setSearchValue(target.value)}
        required
      />
      { searchValue }
      <button type="submit" className="search_button">
        <IoSearch />
      </button>
    </form>
  );
}

export default SearchBar;