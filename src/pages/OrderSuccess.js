import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-green-100">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Placed!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your order. We’re preparing your food with love and care!
        </p>
        <Link to="/" className="text-white bg-green-600 px-6 py-2 rounded-full hover:bg-green-700 transition">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
