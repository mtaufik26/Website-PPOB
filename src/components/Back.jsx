import React from 'react';

const Back = ({ onBack }) => {
  return (
    <div className="sticky top-0 bg-white z-10 border-b">
      <div className="flex items-center p-4">
        <button onClick={onBack} className="mr-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold"></h1>
      </div>
    </div>
  );
};

export default Back;
