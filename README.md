# 💻 Project Overview

Welcome to the React Frontend Interview Challenge!

This is a mobile-friendly React application designed to simulate a two-step e-commerce flow: viewing a product and submitting a customization order.

The application is built using React components and styled with CSS to ensure a responsive, mobile-first experience.

## 📄  1. Product Page (Part 1)

This is the landing view that displays the product's core information:

Product Details: Name (Awesome T-shirt), Image, Price, and current Stock level.

Color Selection: Users can select one of the available colors (Red, Blue, Orange, Black).

Customization Link: A bookmarkable link is provided to navigate to the customization form. This link passes the selected product.id and product.color_name via the URL hash, ensuring the state is maintained when navigating directly to the customization view.

## 📋 2. Customization Form (Part 2)

Once a color is selected and the user clicks "Customize," they are taken to this form:

Pre-filled Details: The product.id and the chosen product.color_name are loaded from the URL hash parameters.

Customization Inputs: Users can select one custom_product.size (from XS to XXL) and specify a custom_product.quantity.

"Add to Cart" Submission: When the user clicks "Add to Cart," the application collects all necessary data and simulates an AJAX call to a mock backend endpoint (http://www.example.com/jsonservice).

## 💼 Technologies Used

ReactJS (Functional Components, Hooks)

CSS3 (For styling and mobile responsiveness)

Simulated fetch (for the "Add to Cart" action)


## 🪛  Installation
Clone the repository:
 
 ```bash
git clone git@github.com:catmaluci/tshirt-app.git
  ```

Install the dependencies:

 ```bash
npm install
```
Run the project in development mode:

 ```bash
npm run dev
```
Open your browser and access:
 ```bash
http://localhost:5173
```
## 🙋🏽‍♀️  **Develop by**
Mariuxi Olaya
<a href="https://www.linkedin.com/in/molaya">LinkedIn</a> 
<a href="https://www.mariuxy.com">Portfolio</a> 




