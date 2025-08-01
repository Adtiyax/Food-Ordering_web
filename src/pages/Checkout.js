import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const gst = subtotal * 0.05;
  const deliveryFee = 50;
  const total = subtotal + gst + deliveryFee;

  const handlePlaceOrder = () => {
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <p>₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="border-t mt-6 pt-4">
            <p className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-2">
              <span>GST (5%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-4">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </p>
            <hr />
            <p className="flex justify-between font-bold text-lg mt-4">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </p>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
