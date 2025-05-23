import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const NavLink = ({ to, activeLink, setActiveLink, children, onClick }) => {
  const isActive = activeLink === to;

  return (
    <HashLink
      className={`px-4 font-bold text-[#2D03A5] border 
        transition-all duration-300 ease-in-out rounded-2xl py-2
        hover:bg-gradient-to-r hover:text-[#5d5656]
        hover:shadow-lg hover:shadow-blue-500/50
        ${
          isActive
            ? "border-gray-800  text-blue-500"
            : "border-transparent"
        }`}
      smooth
      to={to}
      onClick={() => {
        setActiveLink(to);
        if (onClick) onClick(); // Close the navbar on mobile
      }}
    >
      {children}
    </HashLink>
  );
};

const NavLinks = ({ onLinkClick }) => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <>
      <NavLink
        to="/#"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onClick={onLinkClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/#about"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onClick={onLinkClick}
      >
        About
      </NavLink>
      <NavLink
        to="/#services"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onClick={onLinkClick}
      >
        Services
      </NavLink>
      <NavLink
        to="/career"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onClick={onLinkClick}
      >
        Career
      </NavLink>
      <NavLink
        to="/contact#contact"
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onClick={onLinkClick}
      >
        Contact
      </NavLink>
    </>
  );
};

export default NavLinks;
