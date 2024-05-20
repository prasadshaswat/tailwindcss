import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center gap-3">
        <img src="\public\assets\Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-700 text-xs text-white px-2.5 py-1.5 rounded-3xl">
          Hoster is Hiring
        </button>
      </div>
      <ul className="hidden lg:flex items-center gap-6 font-lato text-gray-400">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hoster</a></li>
      </ul>
      <div className="hidden lg:flex items-center gap-6 font-lato">
        <a className="text-gray-400" href="#">Sign Up</a>
        <button className="rounded-md px-4 py-3.5 bg-blue-500 hover:bg-blue-600 text-white">
          JOIN Waitlist
        </button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
