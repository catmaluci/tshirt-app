import { useState } from "react";
import "./ProductDetail.css";
import BoxIcon from "../assets/customize_icon.svg";

const Form = () => {
  const [selectedColor, setSelectedColor] = useState("Red");



  const productPrice = "20.00"; 
 
  const currencySymbol = "€"; 


  return (
    <div className="product-container">
      <div className="product-header">
        <h1 className="product-title">Customize your Awesome Tshirt</h1>
        <p className="product-subtitle">Adult T-Shirt</p>

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

         
          
         
          <p className="product-price"> 
            Price: <strong>{productPrice} {currencySymbol}</strong> 
          </p>
      
          
        </div>
      </div>

      <div className="product-footer">
        <p className="footer-text">
          <strong>Awesome Tshirt </strong> - Adult T-Shirt
        </p>
        <button className="customize-button">
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

export default Form;