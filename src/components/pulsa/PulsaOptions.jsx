import React from 'react';

const pulsaOptions = [
  { amount: 5000, total: 5500 },
  { amount: 10000, total: 10500 },
  { amount: 25000, total: 25500 },
  { amount: 40000, total: 40500 },
  { amount: 50000, total: 50500 },
  { amount: 60000, total: 60500 },
  { amount: 75000, total: 75500 },
  { amount: 80000, total: 80500 },
  { amount: 90000, total: 90500 },
  { amount: 100000, total: 100500 },
  { amount: 150000, total: 150500 },
  { amount: 200000, total: 200500 },
  { amount: 300000, total: 300500 },
  { amount: 500000, total: 500500 },
];

const PulsaOptions = ({ onSelect, selectedAmount, disabled }) => {
  return (
    <div className="mb-9">
      <h2 className="text-sm text-gray-600 mb-4">Nominal</h2>
      <div className="grid grid-cols-2 gap-4">
        {pulsaOptions.map((option) => (
          <button
            key={option.amount}
            className={`p-4 border rounded-lg shadow-md ${
              selectedAmount && selectedAmount.amount === option.amount
                ? 'bg-sky-100 border-sky-500'
                : ''
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => onSelect(option.amount, option.total)}
            disabled={disabled}
          >
            <div className="font-bold text-left">Rp {option.amount.toLocaleString()}</div>
            <div className="text-sm text-gray-500 text-left">Rp {option.total.toLocaleString()}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PulsaOptions;
