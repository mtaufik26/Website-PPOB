import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';

const PulsaProvider = ({ provider, handleProviderChange, denominations }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Pilih Provider</label>
      <div className="relative">
        <select
          value={provider}
          onChange={(e) => handleProviderChange(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none appearance-none"
        >
          <option value="">Pilih Provider</option>
          {Object.keys(denominations).map((prov) => (
            <option key={prov} value={prov}>
              {prov.charAt(0).toUpperCase() + prov.slice(1)}
            </option>
          ))}
        </select>
        <FaMobileAlt className="absolute top-3 right-3 text-gray-400" />
      </div>
    </div>
  );
};

export default PulsaProvider;