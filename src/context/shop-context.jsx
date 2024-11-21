import React, { useState, createContext } from 'react';
import { PRODUCTS } from "../products";

// Create the context
export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  // Initialize cartItems state inside the functional component
  const [cartItems, setCartItems] = useState(() =>
    PRODUCTS.reduce((acc, product) => {
      acc[product.id] = 0; // Set initial quantity to 0 for all products
      return acc;
    }, {})
  );

  // Function to add a product to the cart
  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  // Function to update product quantity in the cart
  const updateCartItemCount = (qty, id) => {
    setCartItems((prev) => ({ ...prev, [id]: qty }));
  };

  // Function to get the total price of the cart
  const getTotalCartAmount = () => {
    return PRODUCTS.reduce((total, product) => {
      const quantity = cartItems[product.id];
      return total + product.price * quantity;
    }, 0);
  };

  // Function to proceed to checkout
  const checkout = () => {
    console.log('Checkout process...');
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        checkout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
