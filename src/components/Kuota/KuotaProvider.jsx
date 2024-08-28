import React from 'react';
import { KuotaPaketData } from './KuotaPaketData';  // Pastikan ini ditambahkan

const KuotaProvider = ({ selectedProvider, setSelectedProvider }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Pilih Provider</label>
    <select
      value={selectedProvider}
      onChange={(e) => setSelectedProvider(e.target.value)}
      className="w-full p-2 border rounded-lg"
    >
      <option value="">Pilih Provider</option>
      {Object.keys(KuotaPaketData).map((provider) => (
        <option key={provider} value={provider}>
          {provider}
        </option>
      ))}
    </select>
  </div>
);

export default KuotaProvider;
