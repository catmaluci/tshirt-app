
import React from 'react';

const SearchBar = ({ searchOpen }) => {
  return (
    <div className={`search-bar ${searchOpen ? 'search-bar-open' : ''}`}>
      <input 
        type="text" 
        placeholder="Search..."
        className="search-input"
      />
      <button className="search-submit">
       
        <svg
          className="icon-small"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;