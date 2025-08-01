import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } = useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <Link to="/menu" className="text-blue-500 underline mt-4 block">Go to Menu</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2">
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => removeFromCart(item.id)} className="px-2 py-1 bg-gray-300 rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)} className="px-2 py-1 bg-gray-300 rounded">+</button>
              <button onClick={() => deleteFromCart(item.id)} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">Total: ₹{totalAmount}</p>
        <Link to="/checkout" className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded">Proceed to Checkout</Link>
      </div>
    </div>
  );
}

export default CartPage;
