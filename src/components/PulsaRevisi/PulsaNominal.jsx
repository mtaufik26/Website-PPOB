import React from 'react';
import classNames from 'classnames';

const PulsaNominal = ({ availableDenominations, handleDenominationSelect, denomination }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Nominal</label>
      <div className="grid grid-cols-2 gap-4">
        {availableDenominations?.map((denominationItem) => (
          <button
            key={denominationItem.harga}
            onClick={() =>
              handleDenominationSelect(denominationItem.harga, denominationItem.code)
            }
            className={classNames(
              'p-2 rounded-lg flex items-center justify-center transition-all duration-200 text-lg font-semibold shadow',
              denomination?.harga === denominationItem.harga
                ? 'bg-blue-100 border-blue-500 shadow-lg'
                : 'bg-white border border-gray-200 hover:shadow-md'
            )}
            aria-pressed={denomination?.harga === denominationItem.harga}
          >
            <span>Rp {denominationItem.harga.toLocaleString()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PulsaNominal;