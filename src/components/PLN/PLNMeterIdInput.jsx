import React from 'react';

const MeterIdInput = ({
  meteranId,
  handleMeteranIdChange,
  meteranIdError,
  handleCheckMeteranId,
  selectedNominal,
  isLoading,
  notification,
  nominalNotSelectedError,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">No. Meter/ID Pel</label>
      <div className="relative">
        <input
          type="text"
          value={meteranId}
          onChange={(e) => handleMeteranIdChange(e.target.value)}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 ${
            meteranIdError ? 'focus:ring-red-500 border-red-500' : 'focus:ring-sky-500 border-gray-300'
          } shadow-sm`}
          aria-label="Meter/ID Input"
        />
        <button
          className={`absolute right-2 top-1 px-4 py-2 rounded-lg ${
            !selectedNominal ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'
          }`}
          onClick={handleCheckMeteranId}
          aria-label="Check Meteran ID"
          disabled={!selectedNominal || isLoading}
        >
          {isLoading ? 'Memproses...' : 'Cek'}
        </button>
      </div>
      {meteranIdError && <p className="text-red-500 text-sm mt-2">{meteranIdError}</p>}
      {notification && (
        <p className={`text-sm mt-2 ${notification.includes('tidak valid') ? 'text-red-500' : 'text-green-500'}`}>
          {notification}
        </p>
      )}
      {nominalNotSelectedError && <p className="text-red-500 text-sm mt-2">{nominalNotSelectedError}</p>}
    </div>
  );
};

export default MeterIdInput;