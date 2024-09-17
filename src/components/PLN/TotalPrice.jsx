import React from 'react';

const TotalPrice = ({ harga, handlePaymentSelection, isDisabled }) => {
  return (
    <div className="sticky bottom-0 bg-white shadow-md p-4 border-t">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Total Harga</span>
          <span className="text-lg font-bold text-black">
            Rp{harga ? harga.toLocaleString() : '0'}
          </span>
        </div>
        <button
          onClick={handlePaymentSelection}
          disabled={isDisabled}
          className={`px-4 py-2 rounded-full text-white text-sm font-semibold ${
            isDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-sky-500 hover:bg-sky-600'
          }`}
        >
          Lanjut Verifikasi
        </button>
      </div>
    </div>
  );
};

export default TotalPrice;
