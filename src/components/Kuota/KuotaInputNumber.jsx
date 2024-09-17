import React from 'react';
import { MdError } from 'react-icons/md'; // Import ikon error

const KuotaInputNumber = ({ value, onChange, errorMessage }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Nomor HP</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full p-3 border rounded-lg ${errorMessage ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-sky-500'} focus:outline-none focus:ring-1 shadow-sm`}
      placeholder="Masukkan nomor HP"
    />
    {/* Tampilkan pesan error dengan ikon tanda seru merah */}
    {errorMessage && (
      <p className="text-red-500 text-sm mt-2 flex items-center">
        <MdError className="mr-1" /> {errorMessage}
      </p>
    )}
  </div>
);

export default KuotaInputNumber;
