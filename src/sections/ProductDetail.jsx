import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.css";
import BoxIcon from "../assets/customize_icon.svg";
import Tshirt from "../assets/tshirt.webp";

const ProductDetail = () => {
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState("Red");

  const productId = "1";
  const productPrice = "20.00";
  const currencySymbol = "€";

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
        <h1 className="product-title">Awesome T-shirt</h1>
        <p className="product-subtitle">Adult T-shirt</p>

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
        <img src={Tshirt} alt="Awesome T-shirt" className="product-image" />
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
          
            <div
              key="Red"
              className={`color-option ${
                selectedColor === "Red" ? "selected" : ""
              }`}
              onClick={() => setSelectedColor("Red")}
            >
              <div
                className="color-circle"
                style={{ backgroundColor: "#f80303" }}
              >
                {selectedColor === "Red"  }
              </div>
              <span className="color-name">Red</span>
            </div>

           
            <div
              key="Blue"
              className={`color-option ${
                selectedColor === "Blue" ? "selected" : ""
              }`}
              onClick={() => setSelectedColor("Blue")}
            >
              <div
                className="color-circle"
                style={{ backgroundColor: "#2f00ff" }}
              >
                {selectedColor === "Blue" }
              </div>
              <span className="color-name">Blue</span>
            </div>

           
            <div
              key="Orange"
              className={`color-option ${
                selectedColor === "Orange" ? "selected" : ""
              }`}
              onClick={() => setSelectedColor("Orange")}
            >
              <div
                className="color-circle"
                style={{ backgroundColor: "#f5511a" }}
              >
                {selectedColor === "Orange" }
              </div>
              <span className="color-name">Orange</span>
            </div>

            
            <div
              key="Black"
              className={`color-option ${
                selectedColor === "Black" ? "selected" : ""
              }`}
              onClick={() => setSelectedColor("Black")}
            >
              <div
                className="color-circle"
                style={{ backgroundColor: "#000000" }}
              >
                {selectedColor === "Black"}
              </div>
              <span className="color-name">Black</span>
            </div>
          </div>

          <p className="product-price">
            Price:{" "}
            <strong>
             {currencySymbol} {productPrice} 
            </strong>
          </p>
        </div>
      </div>

      <div className="product-footer">
        <p className="footer-text">
          <strong>Awesome T-shirt </strong> - Adult T-shirt
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
