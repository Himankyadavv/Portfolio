import React, { useState } from 'react';
import { Snowflake } from 'lucide-react';

const Contactme = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    

    <main id="contact-me" className="container mx-auto py-10 bg-[#141b1b] text-white px-6 sm:px-8 md:px-10 lg:px-24">
    <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">Contact Me</h1>
  
    <div className="flex flex-col md:flex-row justify-between">
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-lg">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 text-lg">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-lg">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
  
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 w-full md:w-auto">
          Send Message
        </button>
      </form>
  
      
      <div className="w-full md:w-1/3 flex items-center justify-center mt-8 md:mt-0">
        <div className="w-48 h-48 sm:w-64 sm:h-64 bg-blue-500 rounded-full flex items-center justify-center">
          <Snowflake size={80} className="text-white sm:text-100" />
        </div>
      </div>
    </div>
  </main>
  
    
  );
};

export default Contactme;