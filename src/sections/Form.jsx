import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Form.css";
import Tshirt from "../assets/tshirt.webp";

const Form = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const colorFromUrl = queryParams.get("colorName") || "Red";
  const productIdFromUrl = queryParams.get("productId") || "1";

  const [selectedColor] = useState(colorFromUrl);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(0);

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

  const handleAddToCart = async () => {
    if (selectedSize && quantity > 0) {
      const cartItem = {
        product_id: productId,
        color_name: selectedColor,
        size: selectedSize,
        quantity: quantity,
        total: calculateTotal(),
      };

      console.log("Sending to cart:", cartItem);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cartItem),
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log("✅ Backend response (Success):", result);

          alert(
            `Product SUCCESSFULLY added to cart!\n\n` +
              `Size: ${cartItem.size}\n` +
              `Quantity: ${cartItem.quantity}\n` +
              `Total: ${currencySymbol} ${cartItem.total}\n\n`
          );

          setQuantity(0);
          setSelectedSize("");
        } else {
          console.error(`❌ Error: ${response.status} ${response.statusText}`);
          alert("Error adding product to cart. Please try again.");
        }
      } catch (error) {
        console.error("❌ Fetch error:", error);
        alert(
          "Network error. Could not connect to the service.\n" +
            "Please check your internet connection."
        );
      }
    } else {
      alert("Please select a size and quantity before adding to cart.");
    }
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <h1 className="product-title">Customize your Awesome T-shirt</h1>
        <p className="product-subtitle">Adult T-Shirt</p>
      </div>

      <div className="product-image-container">
        <img src={Tshirt} alt="Awesome T-Shirt" className="product-image" />
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
          <p className="product-name">Awesome T-shirt </p>

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
