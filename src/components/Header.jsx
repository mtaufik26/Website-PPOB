import React, { useState, useCallback, useRef, useEffect } from 'react';

const Header = () => {

  return (
    <nav className="bg-sky-600 text-white">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap">PPOB App</span>
    </a>
    <div>
      <a href="#" className="text-white hover:text-sky-300 font-medium px-4 py-2 rounded transition duration-300">Login</a>
    </div>
  </div>
</nav>

  );
};

export default Header;
