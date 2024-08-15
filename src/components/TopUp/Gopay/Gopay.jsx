import React from 'react';

function Gopay() {
    
  return (
    <div className="bg-white p-4 shadow-md rounded-lg max-w-sm mx-auto">
      <h1 className="text-lg font-semibold">Dompet Digital</h1>
      <div className="mt-4">
        <label htmlFor="wallet" className="block text-sm font-medium text-gray-700">DANA Dompet Digital</label>
        <select
          id="wallet"
          name="wallet"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option>Rp 5.000</option>
          <option>Rp 10.000</option>
          <option>Rp 20.000</option>
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">No. Telepon</label>
        <input
          type="text"
          name="phone-number"
          id="phone-number"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Contoh: 08123456789"
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cek
        </button>
      </div>
    </div>
  );
}

export default Gopay;
