import React from 'react';
import { FaMobileAlt } from 'react-icons/fa'; // Icon library

const ProviderDropdown = ({ provider, onChange }) => {
  const providers = [
    { name: 'Axis', value: 'axis' },
    { name: 'Indosat', value: 'indosat' },
    { name: 'Smartfren', value: 'smartfren' },
    { name: 'Telkomsel', value: 'telkomsel' },
    { name: 'Tri', value: 'tri' },
    { name: 'XL', value: 'xl' },
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Pilih Provider</label>
      <div className="relative">
        <select
          value={provider}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none appearance-none"
        >
          <option value="">Pilih Provider</option>
          {providers.map((prov) => (
            <option key={prov.value} value={prov.value}>
              {prov.name}
            </option>
          ))}
        </select>
        <FaMobileAlt className="absolute top-3 right-3 text-gray-400" />
      </div>
    </div>
  );
};

export default ProviderDropdown;
