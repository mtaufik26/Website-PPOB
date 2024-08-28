import React from 'react';

const PaketItem = ({ nama, hargaBaru, hargaLama, diskon, onClick }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm flex items-start justify-between mb-4 hover:shadow-md transition-shadow duration-300 ease-in-out bg-white dark:bg-gray-800">
      <div className="flex-1">
        {/* <div className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
          Promo
        </div> */}
        <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-gray-100">
          {nama}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-red-600 font-semibold text-sm">
            Rp{hargaBaru.toLocaleString()}
          </span>
           {hargaLama && (
            <span className="text-gray-400 line-through text-xs">
              Rp{hargaLama.toLocaleString()}
            </span>
          )}
          {diskon && (
            <span className="text-green-600 font-medium text-xs">
              {diskon}%
            </span>
          )} 
        </div>
      </div>
      {/* <button
        onClick={onClick}
        className="bg-green-500 text-white font-semibold py-1 px-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-200"
      >
        Detail
      </button> */}
    </div>
  );
};

export default PaketItem;
