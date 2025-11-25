
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./ProductDetail.css";
import BoxIcon from "../assets/customize_icon.svg";

const ProductDetail = () => {
  const navigate = useNavigate(); 
  
  const [selectedColor, setSelectedColor] = useState("Red");
 
  const productId = "1";
  const productPrice = "20.00"; 
  const currencySymbol = "€"; 

  const colors = [
    { name: "Red", hex: "#f80303" },
    { name: "Blue", hex: "#2f00ff" },
    { name: "Orange", hex: "#f5511a" },
    { name: "Black", hex: "#000000" },
  ];

  const handleCustomizeClick = () => {
 
    const queryParams = new URLSearchParams({
      productId: productId,  
      colorName: selectedColor,  
    }).toString();

    
    navigate(`/CustomizeForm?${queryParams}`); 
  };


  return (
    <div className="product-container">
      <div className="product-header">
        <h1 className="product-title">Awesome Tshirt</h1>
        <p className="product-subtitle">Adult T-Shirt</p>

        <div className="product-info">
          <p className="product-brand">Gildan® Hammer®</p>
          <p className="product-weight">6.0 oz/sq yd</p>
          <p className="product-material">
            <span className="product-info">Product ID:</span>
            <span className="product-info">{productId}</span>
          </p>
        </div>

        <div className="action-icons">
          <button className="icon-button" aria-label="Download">
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
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
          </button>
          <button className="icon-button" aria-label="Share">
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
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
          <button className="icon-button" aria-label="Favorite">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="icon-button" aria-label="Compare">
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="product-image-container">
        <img
          src="/src/assets/tshirt.webp"
          alt="Awesome T-Shirt"
          className="product-image"
        />
      </div>

      <div className="product-details">
        <div className="size-stock">
          <p className="sizes">
            Sizes: <strong>S - 4XL</strong>
          </p>
          <p className="stock">
            Stock: <span>22</span>
          </p>
        </div>

        <div className="color-section">
          <p className="color-label">
            <strong>Color:</strong> <span>{selectedColor}</span>
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search colors..."
              className="search-input"
            />
            <svg
              className="search-icon"
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
          </div>

          <div className="color-options">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`color-option ${
                  selectedColor === color.name ? "selected" : ""
                }`}
                onClick={() => setSelectedColor(color.name)}
              >
                <div
                  className="color-circle"
                  style={{ backgroundColor: color.hex }}
                >
                  {selectedColor === color.name && (
                    <svg
                      className="check-icon"
                      fill="none"
                      stroke="white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="color-name">{color.name}</span>
              </div>
            ))}
          </div>
          
         
          <p className="product-price"> 
            Price: <strong>{productPrice} {currencySymbol}</strong> 
          </p>
      
          
        </div>
      </div>

      <div className="product-footer">
        <p className="footer-text">
          <strong>Awesome Tshirt </strong> - Adult T-Shirt
        </p>
        <button className="customize-button" onClick={handleCustomizeClick}>
          <img
            src={BoxIcon}
            alt="Customize Box Icon"
            className="button-icon"
            style={{ width: "24px", height: "24px" }}
          />
          Customize
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;