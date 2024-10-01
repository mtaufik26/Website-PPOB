import React from 'react';
import classNames from 'classnames';

const PLNNominal = ({ nominals, harga, setHarga, meteranId, setMeteranIdError }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Nominal</label>
      <div className="grid grid-cols-2 gap-4">
        {nominals.map((nominal) => (
          <button
            key={nominal.value}
            onClick={() => {
              if (meteranId.length >= 11) {
                setHarga(nominal.value); // Menggunakan setHarga
                setMeteranIdError('');
              } else {
                setMeteranIdError('Nomor meteran harus valid sebelum memilih nominal.');
              }
            }}
            className={classNames(
              'p-2 rounded-lg flex items-center justify-center transition-all duration-200 text-lg font-semibold',
              harga === nominal.value
                ? 'bg-blue-100 border-blue-500 transform scale-105 shadow-lg'
                : 'bg-white border border-gray-200 hover:shadow-md'
            )}
            aria-pressed={harga === nominal.value} // Menggunakan harga
          >
            <span>Rp {nominal.value.toLocaleString()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PLNNominal;
