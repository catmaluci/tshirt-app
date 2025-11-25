import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.css";
import BoxIcon from "../assets/customize_icon.svg";
import Tshirt from '../assets/tshirt.webp';



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
      </div>

      <div className="product-image-container">
         <img src={Tshirt} 
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
            Price:{" "}
            <strong>
              {productPrice} {currencySymbol}
            </strong>
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
