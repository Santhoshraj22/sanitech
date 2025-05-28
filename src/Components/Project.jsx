import React from 'react';
import factory from '../assets/factory.jpeg'; 
import home from '../assets/home.jpeg'; 
import indus from '../assets/indus.jpeg'; 
import instiute from '../assets/instiute.jpeg'; 

const Project = () => {
  return (
    <section id="projects" className="px-6 py-12 bg-white">
      {/* Section Titles with animation */}
      <h2 
        className="text-2xl text-gray-700 mb-2 font-semibold" 
        data-aos="fade-up" 
        data-aos-delay="100"
      >
        Our Latest Projects
      </h2>
      <h3 
        className="text-4xl font-bold text-gray-800 mb-2" 
        data-aos="fade-up"  // fixed typo here
        data-aos-delay="100"
      >
        Explore Our Portfolio Of
      </h3>
      <h3 
        className="text-4xl font-bold text-teal-600 mb-10" 
        data-aos="fade-down" 
        data-aos-delay="100"
      >
        Featured Projects
      </h3>

      {/* Project cards with staggered fade-up animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { img: indus, title: 'Industrial Cleaning' },
          { img: factory, title: 'Factory Maintenance' },
          { img: home, title: 'Home Sanitization' },
          { img: instiute, title: 'Institutional Cleaning' },
          { img: indus, title: 'Heavy-Duty Projects' },
          { img: home, title: 'Residential Deep Cleaning' },
        ].map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay={400 + index * 150} // stagger delay for each card
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h4>
            <p className="text-gray-600">
              Delivering high-quality, reliable cleaning services tailored to client needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
  