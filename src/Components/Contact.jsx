import React, { useEffect } from 'react';
import AOS from 'aos';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS on component mount
  }, []);

  return (
    <section id="contact" className="min-h-screen bg-white px-8 py-12" data-aos="fade-up">
      <h2 className="text-teal-600 font-semibold mb-2" data-aos="fade-down" data-aos-delay="100">
        — Contact Us
      </h2>
      <h1 className="text-4xl font-bold mb-10" data-aos="fade-down" data-aos-delay="200">
        Get Your <span className="text-teal-600">Order</span> Today!
      </h1>

      <div className="flex flex-col lg:flex-row gap-10" data-aos="zoom-in" data-aos-delay="300">
        {/* Left: Form */}
        <form className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5" data-aos="fade-right" data-aos-delay="400">
          <div>
            <label className="block mb-1 font-medium">Your Name *</label>
            <input
              type="text"
              placeholder="Ex. John Doe"
              className="w-full border rounded-md p-3"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email *</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border rounded-md p-3"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone *</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full border rounded-md p-3"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Service</label>
            <select className="w-full border rounded-md p-3">
              <option>Select services</option>
              <option>Home Cleaning</option>
              <option>Office Cleaning</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Your Message *</label>
            <textarea
              placeholder="Enter Here..."
              className="w-full border rounded-md p-3 h-32"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="flex items-center gap-2 bg-yellow-300 text-black px-6 py-3 rounded-full text-sm font-semibold transition duration-300 ease-in-out hover:bg-teal-700 hover:text-white hover:shadow-lg hover:scale-105"
            >
              book a service
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">➜</span>
            </button>
          </div>
        </form>

        {/* Right: Contact Info */}
        <div className="w-full lg:w-1/3 bg-teal-700 text-white p-8 rounded-2xl space-y-6" data-aos="fade-left" data-aos-delay="500">
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-sm text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Open Time</h3>
            <p className="text-sm text-gray-200">Monday - Friday &nbsp;&nbsp;&nbsp;: 10:00 - 20:00</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="flex gap-4 mt-3">
              <div className="bg-yellow-400 p-2 rounded-full text-black">
                <FaFacebookF />
              </div>
              <div className="bg-yellow-400 p-2 rounded-full text-black">
                <FaTwitter />
              </div>
              <div className="bg-yellow-400 p-2 rounded-full text-black">
                <FaInstagram />
              </div>
              <div className="bg-yellow-400 p-2 rounded-full text-black">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
