import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input placeholder="Email" className="w-full mb-2 p-2 border rounded" />
      <input placeholder="Password" type="password" className="w-full mb-2 p-2 border rounded" />
      <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>

      <p className="mt-4 text-sm text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-600 underline">
          Sign up here
        </Link>
      </p>
    </div>
  );
}

export default Login;
