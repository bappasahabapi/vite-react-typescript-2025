// components/Services.tsx
import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Payroll Services',
    description:
      'Streamline your payroll processes with our reliable and efficient services.',
    icon: '💼',
  },
  {
    title: 'Incorporation Services',
    description:
      'Get expert assistance in setting up your business entity smoothly.',
    icon: '🏢',
  },
  {
    title: 'IRS Problem Resolution',
    description:
      'Resolve tax issues with the IRS effectively with our professional guidance.',
    icon: '📑',
  },
  {
    title: 'Tax Management',
    description:
      'Optimize your tax liabilities with our strategic tax management solutions.',
    icon: '💰',
  },
  {
    title: 'Small Business Accounting',
    description:
      'Keep your financial records in order with our accounting services.',
    icon: '📘',
  },
  {
    title: 'Business Tax Preparation',
    description:
      'Prepare and file taxes for your business accurately and efficiently.',
    icon: '📊',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Services We Offer
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We're accounting for your growth. Explore the services we provide to
          help you achieve financial clarity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                Read Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
