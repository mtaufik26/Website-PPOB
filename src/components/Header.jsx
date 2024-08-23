import React from 'react';

const Header = () => {
  return (
    <header className="bg-sky-600 text-white rounded-lg">
      <nav className="max-w-screen-xl mx-auto p-4 flex items-center justify-between rounded-lg">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          aria-label="Homepage"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="PPOB App Logo"
          />
          <span className="text-xl font-semibold">PPOB App</span>
        </a>
        <div>
          <a
            href="/login"
            className="px-5 py-2 font-medium border border-white rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-white hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Login or Masuk"
          >
            Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
