import React from 'react';
import team from '../assets/team.jpeg';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
  return (
    <section
      id="about"
      className='text-gray-800 bg-white p-6 rounded-lg shadow-lg mt-0'
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* Heading */}
      <h1 className='text-4xl mb-6 font-bold text-teal-700' data-aos="fade-down" data-aos-delay="150">
        — About Us
      </h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 bg-gray-100 p-10 rounded-2xl" data-aos="zoom-in" data-aos-delay="200">
        {/* Image */}
        <img
          src={team}
          alt="Team"
          className="w-full max-w-md h-[400px] object-cover rounded-2xl shadow-md"
          data-aos="fade-right"
          data-aos-delay="250"
        />

        {/* Text Content */}
        <div className="flex-1" data-aos="fade-left" data-aos-delay="300">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Your Top Choice For Cleaning Services
          </h3>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-4">
            <div className="text-center" data-aos="fade-up" data-aos-delay="350">
              <p className="text-4xl font-bold text-teal-600">6,500+</p>
              <p className="text-lg text-gray-600">Completed Projects</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <p className="text-4xl font-bold text-teal-600">1,000+</p>
              <p className="text-lg text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="450">
              <p className="text-4xl font-bold text-teal-600">100+</p>
              <p className="text-lg text-gray-600">Team Members</p>
            </div>
          </div>

          {/* CTA */}
          <div data-aos="fade-up" data-aos-delay="500">
            <p className='mt-10 text-2xl font-semibold text-indigo-500'>
              Book Affordable Services:
            </p>
            <p className='mt-2 text-2xl font-semibold text-emerald-600'>
              Save Time and Money With Us
            </p>

            <button className="group flex items-center mt-8 gap-3 bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-teal-700 hover:text-white transition duration-300 font-medium shadow-md">
              Explore More
              <FiArrowRight className="text-xl transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
