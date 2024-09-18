import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg">
      <nav className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <a
          href="/"
          className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-300"
          aria-label="Homepage"
        >
          <div className="rounded-full bg-white p-1 shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-10 w-10 object-contain"
              alt="PPOB App Logo"
            />
          </div>
          <span className="text-2xl font-semibold tracking-wide">PPOB App</span>
        </a>

        {/* Navigation Section */}
        {/* <div className="space-x-4">
          <a
            href="/about"
            className="text-white font-medium transition-colors duration-300 hover:text-gray-200"
          >
            About Us
          </a>
          <a
            href="/services"
            className="text-white font-medium transition-colors duration-300 hover:text-gray-200"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-white font-medium transition-colors duration-300 hover:text-gray-200"
          >
            Contact
          </a>
        </div> */}

        {/* Login Button */}
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

      {/* SVG Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,234.7C840,224,960,160,1080,160C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
