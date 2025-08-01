import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';                // Tailwind and global styles
import { CartProvider } from './context/CartContext';  // Cart context

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
