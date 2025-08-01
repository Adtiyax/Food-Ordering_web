import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
          <span role="img" aria-label="tomato">🍅</span>
          <span>Tomato</span>
        </Link>

        {/* Navigation + Cart */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/menu" className="hover:underline">Menu</Link>
          <Link to="/login" className="hover:underline">Login</Link>

          <Link to="/cart" className="relative">
            <span role="img" aria-label="cart" className="text-2xl">🛒</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
