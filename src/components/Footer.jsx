import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 text-center text-gray-600">
      <div className="space-x-4">
        <a href="#" className="hover:text-blue-600">Help</a>
        <a href="#" className="hover:text-blue-600">Terms of Service</a>
        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
      </div>
      <p className="mt-2">&copy; 2023 PPOB App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;