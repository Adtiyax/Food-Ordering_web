import React from 'react';

function FoodCard({ food, onAddToCart }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col">
      <img
        src={food.image}
        alt={food.name}
        className="h-40 w-full object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{food.name}</h3>
      <p className="text-gray-600 mt-1">₹{food.price}</p>
      <button
        onClick={() => onAddToCart(food)}
        className="mt-auto bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;
