// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Chaudri CPA</h1>
            <div className="hidden md:block ml-10">
              <ul className="flex space-x-4">
                <li>
                  <a href="#home" className="hover:text-gray-300">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-300">About</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-gray-300">Services</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-300">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">Make a Payment</button>
            <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
