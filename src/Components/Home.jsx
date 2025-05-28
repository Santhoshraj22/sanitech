import React from 'react';
import cover1 from '../assets/cover1.jpg';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="mt-0 px-6 py-10 bg-blue-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-green-600 text-4xl font-semibold">
            Professional Cleaning <br />
            <span className="block">Service Provider</span>
          </h1>
          <p className="text-xl mt-6 text-black max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Drit in est! Ut modi laborum veritatis? Exercitationem assumenda inventore, molestias quia, officiis modi error praesentium nam quas eos quam voluptatem dolorem.
          </p>

          <div className="mt-5">
      <button className="group flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-green-600  transition duration-300">
        Explore More
        <FiArrowRight className="text-xl transform transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
        </div>

        {/* Image Section */}
        <div className="md:w-200 flex justify-center">
          <img
            src={cover1}
            alt="abc"
            className="w-150 h-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
