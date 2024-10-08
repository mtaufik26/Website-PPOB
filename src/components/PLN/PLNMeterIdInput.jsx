import React from 'react';
import { MdError } from 'react-icons/md';

const PLNMeterIdInput = ({
  meteranId,
  handleMeteranIdChange,
  meteranIdError,
  handleCheckMeteranId,
  harga, 
  isLoading,
  notification,
  nominalNotSelectedError,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">No. Meter/ID Pel</label>
      <div className="relative">
        <input
          type="number"
          value={meteranId}
          onChange={(e) => handleMeteranIdChange(e.target.value)}
          className={`w-full  border rounded-lg focus:outline-none focus:ring-1 ${
            meteranIdError ? 'focus:ring-red-500 border-red-500' 
            : 'focus:ring-sky-500 border-gray-300'
          } shadow-sm`}
          aria-label="Meter/ID Input"
        />
        <button
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-lg transition duration-150 ${
            !harga || meteranId.length < 11 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'
          }`}
          onClick={handleCheckMeteranId}
          aria-label="Check Meteran ID"
          disabled={!harga || meteranId.length < 11 || isLoading}
        >
          {isLoading ? 'Memproses...' : 'Cek'}
        </button>
      </div>
      {/* Tampilkan pesan error hanya sekali dengan ikon tanda seru */}
      {meteranIdError && (
        <p className="text-red-500 text-sm mt-1 flex items-center">
          <MdError className="mr-1" /> {meteranIdError}
        </p>
      )}
      {notification && (
        <p className={`text-sm mt-2 ${notification.includes('tidak valid') ? 'text-red-500' : 'text-green-500'}`}>
          {notification}
        </p>
      )}
      {nominalNotSelectedError && <p className="text-red-500 text-sm mt-2">{nominalNotSelectedError}</p>}
    </div>
  );
};

export default PLNMeterIdInput;
