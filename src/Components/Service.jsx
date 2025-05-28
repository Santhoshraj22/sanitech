import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import clean1 from '../assets/clean1.jpeg'; 
import clean2 from '../assets/clean2.jpeg'; 
import clean3 from '../assets/clean3.jpeg'; 

const Service = () => {
  return (
    <section id="Service" className="bg-orange-50 py-12 shadow-lg text-black px-6">
      {/* Section Title & Headings */}
      <div data-aos="fade-down" data-aos-delay="100">
        <p className="text-2xl mb-4 tracking-wide">Our Services</p>
        <h5 className="text-4xl font-medium">Explore Our</h5>
        <h5 className="text-4xl font-semibold text-yellow-500 mt-2">Cleaning Service</h5>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div 
          className="bg-white text-black rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <img src={clean1} alt="Residential Cleaning" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h4 className="text-xl font-semibold mb-2">Residential Cleaning</h4>
          <p className="text-sm text-gray-700">Top-to-bottom house cleaning service tailored to your needs.</p>
        </div>

        {/* Card 2 */}
        <div 
          className="bg-white text-black rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <img src={clean2} alt="Commercial Cleaning" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h4 className="text-xl font-semibold mb-2">Commercial Cleaning</h4>
          <p className="text-sm text-gray-700">Professional cleaning for offices, buildings, and retail spaces.</p>
        </div>

        {/* Card 3 */}
        <div 
          className="bg-white text-black rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300" 
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <img src={clean3} alt="Deep Cleaning" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h4 className="text-xl font-semibold mb-2">Deep Cleaning</h4>
          <p className="text-sm text-gray-700">Thorough cleaning service for kitchens, bathrooms, and more.</p>
        </div>
      </div>

      {/* Explore Button */}
      <div className="mt-10 flex justify-end" data-aos="zoom-in" data-aos-delay="500">
        <button className="group flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-300 transition duration-300">
          Explore More
          <FiArrowRight className="text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Service;
