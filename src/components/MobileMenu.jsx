

const MobileMenu = ({ menuOpen, toggleMenu }) => {
  return (
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
  );
};

export default MobileMenu;