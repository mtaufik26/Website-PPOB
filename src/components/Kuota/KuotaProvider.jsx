import React from 'react';
import { KuotaPaketData } from './KuotaPaketData'; 
import { FaMobileAlt } from 'react-icons/fa';

const KuotaProvider = ({ selectedProvider, setSelectedProvider }) => (
  <div className="mb-4 relative">
    <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Provider</label>
    <div className="relative">
      <select
        value={selectedProvider}
        onChange={(e) => setSelectedProvider(e.target.value)}
        className="-full p-2 border rounded-lg focus:outline-none appearance-none"
      >
        <option value="">Pilih Provider</option>
        {KuotaPaketData && Object.keys(KuotaPaketData).map((provider) => (
          <option key={provider} value={provider}>
            {provider}
          </option>
        ))}
      </select>
      <FaMobileAlt className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" /> {/* Position icon properly */}
    </div>
  </div>
);

export default KuotaProvider;
