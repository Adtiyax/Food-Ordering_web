import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Full-height Hero Section */}
      <section className="min-h-screen bg-[url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center flex flex-col justify-center items-center text-white px-6 text-center">
        <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">
          Delicious Food Delivered Fast
        </h1>
        <p className="text-xl max-w-xl mb-8 drop-shadow-md">
          Explore our wide variety of cuisines and enjoy your favorite meals at your doorstep.
        </p>
        <Link
          to="/menu"
          className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded text-lg font-semibold shadow-lg"
        >
          Explore Menu
        </Link>
      </section>

      {/* Promotion Section */}
      <section className="py-16 bg-gray-100 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>Get your food delivered within 30 minutes or less.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
            <p>We use only the freshest and highest quality ingredients.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Easy Payment</h3>
            <p>Multiple payment options including online wallets and cash on delivery.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
