// components/WhoWeAre.tsx
import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <section id="who-we-are" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Who We Are
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We believe in the power of financial clarity. With a commitment to
          integrity and excellence, we simplify your financial journey and help
          you achieve success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/500x400"
              alt="Who We Are"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 mt-4">
              To simplify your financial journey with reliable accounting and
              tax filing services. We ensure accuracy, compliance, and
              personalized solutions that empower your financial success and
              peace of mind.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mt-8">
              What We Believe In
            </h3>
            <p className="text-gray-600 mt-4">
              We are dedicated to providing accurate accounting and tax services
              that empower individuals and businesses to make informed
              decisions. Trust us to simplify your financial journey with
              personalized solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
