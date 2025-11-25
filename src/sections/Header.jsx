import { useState } from "react";
import Logo from "../components/Logo";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-flex">
          <button 
            aria-label="Toggle Menu" 
            className="menu-button"
            onClick={toggleMenu}
          >
            <svg
              className="icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="logo-center">
            <Logo />
          </div>

          <button 
            aria-label="Search" 
            className="search-button"
            onClick={toggleSearch}
          >
            <svg
              className="icon"
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
      </div>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className={`side-menu ${menuOpen ? 'side-menu-open' : ''}`}>
        <div className="menu-header">
          <h2>Gildan Brands</h2>
          <button className="close-button" onClick={toggleMenu}>
            <svg
              className="icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="menu-nav">
          <a href="#home" className="menu-item">Home</a>
          <a href="#products" className="menu-item">Products</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;