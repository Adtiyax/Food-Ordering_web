import React from 'react';
import { useCart } from '../context/CartContext';
import FoodCard from '../components/FoodCard';

const fakeMenu = [
  {
    id: 1,
    name: 'Paneer Pizza',
    price: 249,
    image: 'https://images.unsplash.com/photo-1596458397260-255807e979f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Veg Burger',
    price: 99,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 3,
    name: 'Masala Fries',
    price: 79,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=687&q=80',
  },
];

function Menu() {
  const { addToCart } = useCart();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {fakeMenu.map((food) => (
          <FoodCard key={food.id} food={food} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
