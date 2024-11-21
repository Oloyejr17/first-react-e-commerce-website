import product1 from "./assets/products/1.jpg";
import product2 from "./assets/products/2.jpg";
import product3 from "./assets/products/3.jpg";  // Fixed the duplicate import of product2
import product4 from "./assets/products/4.jpg";
import product5 from "./assets/products/5.jpg";
import product6 from "./assets/products/6.jpg";
import product7 from "./assets/products/7.jpg";
import product8 from "./assets/products/8.webp";
import product9 from "./assets/products/9.jpg";
import product10 from "./assets/products/10.png";

// Function to format prices with commas and currency symbol
const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "symbol",
  }).format(price);
};

export const PRODUCTS = [
  {
    id: 1,
    productName: "Samsung",
    price: 705752,
    productImage: product1,
  },
  {
    id: 2,
    productName: "Samsung 65inch Class 4K S90C Series Quantum HDR Ultra HD Smart OLED TV",
    price: 2654543.0,
    productImage: product2,
  },
  {
    id: 3,
    productName: "Samsung s23 Ultra",
    price: 1862663.0,
    productImage: product3,
  },
  {
    id: 4,
    productName: "Iphone 15 pro-max",
    price: 1739873.0,
    productImage: product4,
  },
  {
    id: 5,
    productName: "Victus gaming laptop",
    price: 276527.99,
    productImage: product5,
  },
  {
    id: 6,
    productName: "summer sweatshirt",
    price: 69838.0,
    productImage: product6,
  },
  {
    id: 7,
    productName: "medium-sized Jacket",
    price: 57093.0,
    productImage: product7,
  },
  {
    id: 8,
    productName: "Glock-17 Pistol",
    price: 9762662.0,
    productImage: product8,
  },
  {
    id: 9,
    productName: "sweatshirt for men",
    price: 47453.0,
    productImage: product9,
  },
  {
    id: 10,
    productName: "M17 and Ak47",
    price: 5424256.0,
    productImage: product10,
  },
];
