import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
// Replace with dynamic userId from auth context if available

  return (
    <nav className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-40">
            <Link to="/home" className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-200">
              Home 🏠
            </Link>
            <Link to={"/profile/:id"} className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-200">
              Profile 👤
            </Link>
            <Link to="/myprojects" className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-200">
              Projects 💼
            </Link>
            <Link to="/request_invitation" className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-200">
              Requests & Invitations ✉️
            </Link>
            <Link to="/newpost" className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-200">
              New Post ➕
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
