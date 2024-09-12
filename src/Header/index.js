import React from 'react';
import './index.css';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <h1 className="logo">Acowale News</h1>
      <input
        type="text"
        placeholder="Search news..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    </header>
  );
};

export default Header;