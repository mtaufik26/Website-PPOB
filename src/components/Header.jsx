import React from 'react';

const Header = () => {
  return (
    <nav className="bg-sky-600 text-white">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">PPOB App</span>
        </a>
        <div>
          <a
            href="/login"
            className="text-white hover:text-sky-600 hover:bg-white font-medium px-5 py-2 rounded-lg border border-white shadow-md transition duration-300 ease-in-out"
          >
            Login | Masuk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
