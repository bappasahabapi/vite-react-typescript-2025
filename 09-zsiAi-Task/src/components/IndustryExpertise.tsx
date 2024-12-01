// components/IndustryExpertise.tsx
import React from 'react';

const IndustryExpertise: React.FC = () => {
  return (
    <section id="industry-expertise" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Industry Expertise Savings
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Your financial goals, our expertise. Let us guide you to success with tailored strategies and solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Expertise Item 1 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <div className="text-blue-600 text-4xl">📊</div>
            <h3 className="text-xl font-bold text-gray-800 mt-4">Comprehensive Reporting</h3>
            <p className="text-gray-600 mt-2">
              Gain insights into your finances with our detailed and accurate reports.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Read Report
            </button>
          </div>

          {/* Expertise Item 2 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <div className="text-blue-600 text-4xl">💡</div>
            <h3 className="text-xl font-bold text-gray-800 mt-4">Innovative Solutions</h3>
            <p className="text-gray-600 mt-2">
              We leverage technology and expertise to bring smarter financial strategies.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Learn More
            </button>
          </div>

          {/* Expertise Item 3 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <div className="text-blue-600 text-4xl">🔒</div>
            <h3 className="text-xl font-bold text-gray-800 mt-4">Security & Trust</h3>
            <p className="text-gray-600 mt-2">
              Your financial data is safe with us, ensuring transparency and reliability.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
