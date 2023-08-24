"use client";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between px-20 font-sans font-semibold text-white">
      <p className="py-8 text-3xl md:py-3">Rtist X CMCPAC</p>
      <ul className="hidden md:flex flex-row justify-between w-1/3 text-lg items-center md:visible">
        <li>About</li>
        <li>Schedule</li>
        <li>Rules</li>
        <li>Contact</li>
      </ul>
      <button
        className={`${
          isMenuOpen ? "hidden" : "block"
        } md:hidden text-white text-2xl`}
        onClick={toggleMenu}
      >
        ☰
      </button>
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden py-5 flex-row justify-between w-1/3`}
      >
        <li>About</li>
        <li>Schedule</li>
        <li>Rules</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
