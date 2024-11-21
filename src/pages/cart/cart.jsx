import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, checkout } = useContext(ShopContext);
  const navigate = useNavigate();

  // Filter only selected products
  const itemsInCart = PRODUCTS.filter((product) => cartItems[product.id] > 0);

  // Calculate the total price of selected products
  const totalAmount = itemsInCart.reduce((total, product) => {
    const price = product.price || 0; // Fallback to 0 if price is undefined
    const quantity = cartItems[product.id] || 0; // Fallback to 0 if quantity is undefined
    return total + price * quantity;
  }, 0);

  // Total number of items
  const totalItems = itemsInCart.reduce(
    (total, product) => total + (cartItems[product.id] || 0),
    0
  );

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className="cart-items">
        {itemsInCart.length > 0 ? (
          itemsInCart.map((product) => (
            <CartItem key={product.id} data={product} />
          ))
        ) : (
          <h1>Your Shopping Cart is Empty</h1>
        )}
      </div>

      {itemsInCart.length > 0 && (
        <div className="checkout">
          <div className="summary">
            <h2>Cart Summary</h2>
            <p>Total Items: {totalItems}</p>
            <p>Subtotal: ₦{totalAmount.toLocaleString()}</p>
          </div>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};
