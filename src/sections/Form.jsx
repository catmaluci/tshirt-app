import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const colorFromUrl = queryParams.get("colorName") || "Red";
  const productIdFromUrl = queryParams.get("productId") || "1";

  const [selectedColor, setSelectedColor] = useState(colorFromUrl);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [showSizeModal, setShowSizeModal] = useState(false);

const productId = productIdFromUrl;
  const productPrice = 20.0;
  const currencySymbol = "€";

  const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];

  const handleQuantityChange = (size, change) => {
    if (selectedSize !== size) {
      setSelectedSize(size);
      setQuantity(change > 0 ? 1 : 0);
    } else {
      const newQuantity = quantity + change;
      if (newQuantity >= 0) {
        setQuantity(newQuantity);
        if (newQuantity === 0) {
          setSelectedSize("");
        }
      }
    }
  };

  const calculateTotal = () => {
    const subtotal = productPrice * quantity;
    return subtotal.toFixed(2);
  };

  const handleAddToCart = () => {
    if (selectedSize && quantity > 0) {
      const cartItem = {
        product_id: productId,
        color_name: selectedColor,
        size: selectedSize,
        quantity: quantity,
        total: calculateTotal(),
      };
      console.log("Adding to cart:", cartItem);
    } else {
      alert("Please select a size and quantity");
    }
  };

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

      <div className="size-selection-form">
        <div className="form-header">
          <h2 className="form-title">Select Size</h2>
        </div>

        <div className="sizes-list">
          {sizes.map((size) => (
            <div key={size} className="size-row">
              <span className="size-label">{size}</span>
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(size, -1)}
                  disabled={selectedSize !== size || quantity === 0}
                >
                  −
                </button>
                <span className="quantity-display">
                  {selectedSize === size ? quantity : 0}
                </span>
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(size, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <p className="product-name">Awesome Tshirt </p>

          <div className="summary-row">
            <span className="summary-label">Product ID:</span>
            <span className="summary-value">{productId}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Color:</span>
            <span className="summary-value">{selectedColor}</span>
          </div>

          {quantity > 0 && (
            <div className="summary-row">
              <span className="summary-label">{quantity} Items selected</span>
            </div>
          )}

          <div className="total-row">
            <span className="total-label">Total:</span>
            <span className="total-value">
              {currencySymbol} {calculateTotal()}
            </span>
          </div>
        </div>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Form;
