import React from 'react';
import classNames from 'classnames';

const PLNNominal = ({ nominals, selectedNominal, setSelectedNominal, meteranId, setMeteranIdError }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Nominal</label>
      <div className="grid grid-cols-2 gap-4">
        {nominals.map((nominal) => (
          <button
            key={nominal.value}
            onClick={() => {
              if (meteranId.length >= 11) {
                setSelectedNominal(nominal.value);
                setMeteranIdError('');
              } else {
                setMeteranIdError('Nomor meteran harus valid sebelum memilih nominal.');
              }
            }}
            className={classNames(
              'p-2 rounded-lg flex items-center justify-center transition-all duration-200 text-lg font-semibold shadow',
              selectedNominal === nominal.value
                ? 'bg-blue-100 border-blue-500 shadow-lg'
                : 'bg-white border border-gray-200 hover:shadow-md'
            )}
            aria-pressed={selectedNominal === nominal.value}
          >
            <span>Rp {nominal.value.toLocaleString()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PLNNominal;