// UserInfo.js
import React from 'react';
import { UserCircleIcon } from '@heroicons/react/solid';

const UserInfo = ({ username, balance, methods }) => {
  return (
    <div className="bg-sky-100 shadow-lg rounded-lg p-6 mb-5 flex items-center justify-between max-w-lg mx-auto">
      <div className="flex items-center">
        <UserCircleIcon className="h-12 w-12 text-sky-700 mr-4" />
        <div>
          <h1 className="text-xl font-bold text-gray-800">Halo, {username}!</h1>
          <p className="text-gray-600">{methods}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold" style={{ marginBottom: '0.5rem' }}>Rp{parseInt(balance).toLocaleString('id-ID')}</p>
        <button className="bg-sky-500 text-white px-4 py-2 rounded-lg">Top Up</button>
      </div>
    </div>
  );
};

export default UserInfo;
