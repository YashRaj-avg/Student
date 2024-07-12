import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-white text-xl font-bold">STUDENT PORTAL</Link>

       
        <div className="flex space-x-4">
          <NavLinkWithBox to="/" label="Home" />
          <NavLinkWithBox to="/form" label="Form" />
          <NavLinkWithBox to="/data" label="Data" />
        </div>
      </div>
    </nav>
  );
};

const NavLinkWithBox = ({ to, label }) => {
  return (
    <Link to={to} className="text-white">
      <div className="relative">
        <div className="bg-gray-700 hover:bg-gray-600 text-center px-4 py-2 rounded-lg">
          {label}
        </div>
      </div>
    </Link>
  );
};

export default Navbar;
