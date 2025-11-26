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
  const [sizeQuantities, setSizeQuantities] = useState({});
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [imageFileName, setImageFileName] = useState(null);

  const productId = productIdFromUrl;
  const productPrice = 20.0;
  const currencySymbol = "€";

  const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        alert("Please upload only PNG or JPG images");
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setImageFileName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
      setUploadedImage(null);
      setImageBase64(null);
      setImageFileName(null);
    }
  };

  const handleQuantityChange = (size, change) => {
    setSizeQuantities((prev) => {
      const currentQuantity = prev[size] || 0;
      const newQuantity = currentQuantity + change;

      if (newQuantity <= 0) {
        const { [size]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [size]: newQuantity,
      };
    });
  };

  const calculateTotal = () => {
    const totalQuantity = Object.values(sizeQuantities).reduce(
      (sum, qty) => sum + qty,
      0
    );
    const subtotal = productPrice * totalQuantity;
    return subtotal.toFixed(2);
  };

  const getTotalItems = () => {
    return Object.values(sizeQuantities).reduce((sum, qty) => sum + qty, 0);
  };

  const getDisplayFileName = (filename) => {
    const MAX_LENGTH = 15;
    if (!filename) return null;

    if (filename.length > MAX_LENGTH) {
      return filename.substring(0, MAX_LENGTH) + "...";
    }
    return filename;
  };

  const handleAddToCart = async () => {
    const totalItems = getTotalItems();

    if (totalItems === 0) {
      alert(
        "Please select at least one size and quantity before adding to cart."
      );
      return;
    }

    const cartItems = Object.entries(sizeQuantities).map(
      ([size, quantity]) => ({
        product_id: productId,
        color_name: selectedColor,
        size: size,
        quantity: quantity,
        price_per_item: productPrice,
        subtotal: (productPrice * quantity).toFixed(2),
        custom_image: uploadedImage ? "Yes" : "No",
      })
    );

    const cartData = {
      items: cartItems,
      total: calculateTotal(),
      has_custom_image: uploadedImage ? true : false,

      custom_image_data: imageBase64
        ? {
            filename: imageFileName,
            data: imageBase64,
            mime_type: imageBase64
              ? imageBase64.split(";")[0].split(":")[1]
              : null,
          }
        : null,
    };

    console.log("Sending to cart:", cartData);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("✅ Backend response (Successfully):", result);

        const itemsMessage = cartItems
          .map((item) => `${item.size}: ${item.quantity} unit(s)`)
          .join("\n");

        alert(
          `Products have been SUCCESSFULLY added!\n\n` +
            `${itemsMessage}\n\n` +
            `Total items: ${totalItems}\n` +
            `Total cost: ${currencySymbol} ${calculateTotal()}` +
            (uploadedImage ? `\nImage added: ${imageFileName}` : "")
        );

        setSizeQuantities({});
        handleRemoveImage();
      } else {
        console.error(`❌ Error: ${response.status} ${response.statusText}`);
        alert("Error adding product to cart. Please try again.");
      }
    } catch (error) {
      console.error("❌ Fetch error:", error);
      alert("Network error.\n");
    }
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <h1 className="product-title">Customize your Awesome T-shirt</h1>
        <p className="product-subtitle">Adult T-shirt</p>
      </div>

      <div className="product-image-container">
        <img src={Tshirt} alt="Awesome T-shirt" className="product-image" />
        {uploadedImage && (
          <img
            src={uploadedImage}
            alt="Custom design"
            className="custom-image-overlay"
          />
        )}
      </div>

      <div className="size-selection-form">
        <div className="form-header">
          <h2 className="form-title">Upload Custom Design</h2>
        </div>

        <div className="image-upload-section">
          <input
            type="file"
            id="image-upload"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <label htmlFor="image-upload" className="upload-button">
            {uploadedImage ? "Change Image" : "Choose Image (PNG, JPG)"}
          </label>
          {uploadedImage && (
            <button onClick={handleRemoveImage} className="remove-image-button">
              Remove Image
            </button>
          )}
          {imageFileName && (
            <p className="image-filename">
              {" "}
              {getDisplayFileName(imageFileName)}
            </p>
          )}
        </div>

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
                  disabled={!sizeQuantities[size] || sizeQuantities[size] === 0}
                >
                  −
                </button>
                <span className="quantity-display">
                  {sizeQuantities[size] || 0}
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

          {uploadedImage && (
            <div className="summary-row">
              <span className="summary-label">Custom Design:</span>
              <span className="summary-value">
                {getDisplayFileName(imageFileName)}
              </span>
            </div>
          )}

          {getTotalItems() > 0 && (
            <>
              <div className="summary-row">
                <span className="summary-label">Sizes selected:</span>
              </div>
              {Object.entries(sizeQuantities).map(([size, quantity]) => (
                <div
                  key={size}
                  className="summary-row"
                  style={{ paddingLeft: "20px" }}
                >
                  <span className="summary-label">{size}:</span>
                  <span className="summary-value">{quantity} unit(s)</span>
                </div>
              ))}
              <div className="summary-row">
                <span className="summary-label">
                  Total items: {getTotalItems()}
                </span>
              </div>
            </>
          )}

          <div className="total-row">
            <span className="total-label">Total Cost:</span>
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
