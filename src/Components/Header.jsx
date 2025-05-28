  import React from 'react';
  import sanitech from '../assets/sanitech.png'; 

  const Header = () => {
    return (
      <header className="bg-blue-800 py-7 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <img src={sanitech} alt="Sanitech Logo" className=" mx-3w-40 h-20 object-contain" />
          
          </div>

          {/* Navigation Menu */}
          <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-white font-medium text-lg">
          <li><a href="#home" className="hover:text-red-400 transition">Home</a></li>
          <li><a href="#Service" className="hover:text-red-400 transition">Service</a></li>
          <li><a href="#projects" className="hover:text-red-400 transition">Projects</a></li>
          <li><a href="#about" className="hover:text-red-400 transition">About Us</a></li>
          <li><a href="#contact" className="hover:text-red-400 transition">Contact Us</a></li>
        </ul>

          </nav>
          
        </div>
      </header>
    );
  };

  export default Header;
