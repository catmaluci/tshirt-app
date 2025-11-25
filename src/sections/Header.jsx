import { useState } from "react";
import Logo from "../components/Logo";
import MobileMenu from "../components/MobileMenu";
import SearchBar from "../components/SearchBar";
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
                d="M20 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <SearchBar searchOpen={searchOpen} />
      </div>

      {menuOpen && <div onClick={toggleMenu}></div>}

      <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Header;
