import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#141b1b] flex justify-between items-center px-[2rem] lg:px-[6rem] py-[2rem] text-white relative">
      
      <div className="font-semibold text-lg md:text-xl lg:text-xxl">
        Himank Yadav
      </div>

      
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes size={24} /> 
          ) : (
            <FaBars size={24} />  
          )}
        </button>
      </div>

    
      <div className="hidden lg:flex gap-[1.5rem] lg:gap-[3rem]">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </div>

      
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-[#141b1b] text-white flex flex-col gap-6 p-6 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 lg:hidden`}
      >
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About Me</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact Me</a>
      </div>
    </div>
  );
}
