import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-sky-600 via-blue-500 to-blue-700 text-white shadow-lg">
      <nav className="relative z-10 max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
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

        {/* Login Button */}
        <div>
          <a
            href="/login"
            className="px-5 py-2 -mr-3 font-medium border border-white rounded-full shadow-md transition-colors duration-200 ease-in-out hover:bg-white hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Login or Masuk"
          >
            Login
          </a>
        </div>
      </nav>

      {/* SVG Wave with white gradient at the bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: '#f0f8ff', stopOpacity: 0.9 }} />
            </linearGradient>
            <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }} />
              <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.9 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,160L40,186.7C80,213,160,267,240,272C320,277,400,235,480,202.7C560,171,640,149,720,149.3C800,149,880,171,960,176C1040,181,1120,171,1200,181.3C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
          <rect x="0" y="0" width="1440" height="320" fill="url(#bottomGradient)" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
