import React from 'react';
import mechLogo from '../assets/mech1.png';

const Navbar = () => {
  return (
    <nav className="p-3 flex bg-black justify-between items-center">
      <div id="brand" className="flex gap-2 items-center">
        {/* Use the imported image */}
        <img src={mechLogo} alt="Logo" className="max-w-12 max-h-12" />
        <span className="text-lg font-semibold text-white">Mech Help</span>
      </div>

      <div id="nav-menu" className="hidden lg:flex gap-12">
        <a href="#" className="font-medium hover:text-primary text-white">Home</a>
        <a href="#" className="font-medium hover:text-primary text-white">Services</a>
        <a href="#" className="font-medium hover:text-primary text-white">Nearby Stores</a>
        <a href="#" className="font-medium hover:text-primary text-white">Profiles</a>
      </div>

      <button className="hidden lg:flex gap-3 items-center border border-gray-300 px-6 py-2 rounded-lg hover:border-gray-600 bg-white">
        <span className="font-semibold">Join Us</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>

      <button className="p-2 lg:hidden">
        <i className="fa-solid fa-bars text-gray-600"></i>
      </button>

      <div id="navdialog" className="hidden fixed bg-white inset-0 p-3 z-10 md:hidden">
        <div id="navbar" className="flex justify-between">
          <a href="#" id="brand" className="flex gap-2 items-center">
            <img src={mechLogo} alt="Logo" className="object-cover max-w-12 max-h-12" />
          </a>
          <button className="p-2 lg:hidden">
            <i className="fa-solid fa-xmark text-gray-500"></i>
          </button>
        </div>

        <div className="mt-6">
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg text-gray-800">Home</a>
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg text-gray-800">Services</a>
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg text-gray-800">Nearby Stores</a>
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg text-gray-800">Profile</a>
        </div>

        <div className="h-[1px] bg-gray-400">
          <button className="mt-6 w-full flex gap-2 items-center border px-6 py-4 rounded-lg hover:bg-gray-50 bg-white">
            <span className="font-semibold text-gray-800">Join Us</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
