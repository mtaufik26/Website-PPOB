import React from 'react';

const KuotaPaketItem = ({ nama, hargaBaru, hargaLama, diskon, isSelected, onClick }) => (
  <div
    className={`p-4 border rounded-lg mb-4 cursor-pointer shadow-sm ${
      isSelected ? 'bg-blue-50' : 'bg-white'
    }`}
    onClick={onClick}
  >
    <div>
      <div className="flex items-center mb-1">
        {diskon && (
          <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-sm mr-2">
            Promo
          </div>
        )}
        <p className="font-medium text-gray-700 text-sm">{nama}</p>
      </div>
      <div className="flex items-center">
        <p className="text-lg font-semibold text-gray-800">Rp{hargaBaru}</p>
        {diskon && (
          <div className="text-red-500 bg-red-100 text-xs font-bold px-2 py-0.5 rounded-full ml-2">
            {diskon}%
          </div>
        )}
      </div>
      {hargaLama && <p className="line-through text-gray-400 text-xs mt-1">Rp{hargaLama}</p>}
    </div>
  </div>
);

export default KuotaPaketItem;
