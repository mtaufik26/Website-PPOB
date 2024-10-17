import React from 'react';
import { UserCircleIcon } from '@heroicons/react/solid';

const UserInfo = ({ username, balance, methods }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 mb-5 flex items-center justify-between max-w-lg mx-auto transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <div className="flex items-center">
        <div className="bg-sky-100 p-2 rounded-full">
          <UserCircleIcon className="h-12 w-12 text-sky-600" />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-semibold text-sky-800">Hello, {username}!</h1>
          <p className="text-sm text-gray-500 mt-1">{methods}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-sky-700 mb-3">Rp{parseInt(balance).toLocaleString('id-ID')}</p>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 transition-all">
          Top Up
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
