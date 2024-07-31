import React from 'react';
import Card from '../Card';

const pulsaOptions = [
  { amount: 5000, bonus: null },
  { amount: 10000, bonus: null },
  { amount: 25000, bonus: '750MB 1hr' },
  { amount: 40000, bonus: '750MB 1hr' },
  { amount: 50000, bonus: '1GB 1hr' },
  { amount: 60000, bonus: '1GB 1hr' },
  { amount: 75000, bonus: '1GB 1hr' },
  { amount: 80000, bonus: '1GB 1hr' },
  { amount: 90000, bonus: '1GB 1hr' },
  { amount: 100000, bonus: null },
  { amount: 150000, bonus: null },
  { amount: 300000, bonus: null },
  { amount: 500000, bonus: null },
];

const PulsaOptions = () => {
  return (
    <Card>
    <div>
      <h2 className="text-lg font-semibold mb-2">Pilih nominal isi ulang pulsa</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {pulsaOptions.map((option, index) => (
          <div key={index} className="bg-sky-100 p-4 rounded-lg text-center">
            <div className="font-bold">Rp {option.amount.toLocaleString()}</div>
            {option.bonus && <div className="text-sky-500 text-sm">{option.bonus}</div>}
          </div>
        ))}
      </div>
    </div>
    </Card>
  );
};

export default PulsaOptions;