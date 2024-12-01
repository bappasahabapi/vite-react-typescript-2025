// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Tax Services & Accounting Services
          </h1>
          <p className="mt-4 text-lg text-gray-300 sm:mt-6">
            Simplifying your financial journey with reliable accounting and tax filing services.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500">Email Your Documents</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-600">Make an Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
