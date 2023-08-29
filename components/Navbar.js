"use client";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between px-20 font-sans font-semibold text-white">
      <p className="py-8 text-3xl md:py-3">Rtist X CMCPAC</p>
      <ul className="hidden md:flex flex-row justify-between w-1/3 text-lg items-center md:visible ">
        <li className="hover:text-stone-400 px-2">
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </ScrollLink>
        </li>
        <ScrollLink
          activeClass="active"
          to="timeline"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="hover:text-stone-400 px-2">Timeline</li>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="hover:text-stone-400 px-2">FAQs</li>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="organizers"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="hover:text-stone-400 px-2">Organizers</li>
        </ScrollLink>
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
        {" "}
        <li className="text-extrabold px-4 text-red-400" onClick={toggleMenu}>
          X
        </li>
        <li className="py-2">
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </ScrollLink>
        </li>
        <ScrollLink
          activeClass="active"
          to="timeline"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="py-2">Timeline</li>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="py-2">FAQs</li>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="organizers"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="py-2">Organizers</li>
        </ScrollLink>
      </ul>
    </div>
  );
};

export default Navbar;
