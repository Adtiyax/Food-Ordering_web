import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input placeholder="Name" className="w-full mb-2 p-2 border rounded" />
      <input placeholder="Email" className="w-full mb-2 p-2 border rounded" />
      <input placeholder="Password" type="password" className="w-full mb-2 p-2 border rounded" />
      <button className="w-full bg-green-600 text-white p-2 rounded">Create Account</button>

      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-green-600 underline">
          Log in here
        </Link>
      </p>
    </div>
  );
}

export default Signup;
