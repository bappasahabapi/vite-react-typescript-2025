
// components/Testimonial.tsx
import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jasmine Lemon',
    role: 'Manager at Google',
    image: 'https://via.placeholder.com/150',
    review:
      'A customer is an individual or business that purchases another company\'s goods or services. Customers are important because they drive revenues.',
  },
  {
    name: 'Michael Green',
    role: 'CEO at FinTech Co.',
    image: 'https://via.placeholder.com/150',
    review:
      'The team at Chaudri CPA is amazing! They simplified our accounting processes and ensured compliance. Highly recommend them.',
  },
  {
    name: 'Sophia Brown',
    role: 'Entrepreneur',
    image: 'https://via.placeholder.com/150',
    review:
      'Chaudri CPA transformed our tax filing experience. Their expertise and attention to detail are unmatched.',
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Here’s How Our Clients are Dominating
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
              <p className="text-gray-600 mt-4">{testimonial.review}</p>
              <div className="mt-4 flex justify-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927a.25.25 0 0 1 .45 0l1.378 4.243a.25.25 0 0 0 .236.172h4.462a.25.25 0 0 1 .147.453l-3.613 2.676a.25.25 0 0 0-.09.272l1.379 4.243a.25.25 0 0 1-.384.27L10 12.347a.25.25 0 0 0-.293 0l-3.614 2.676a.25.25 0 0 1-.384-.27l1.379-4.243a.25.25 0 0 0-.09-.272L3.5 7.795a.25.25 0 0 1 .147-.453h4.462a.25.25 0 0 0 .236-.172L9.049 2.927z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
