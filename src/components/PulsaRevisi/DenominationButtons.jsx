import React from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';

const denominations = {
  axis: [
    { amount: 5000, code: 'SBIAXIS5k' },
    { amount: 10000, code: 'SBIAXIS10k' },
    { amount: 25000, code: 'SBIAXIS25k' },
    { amount: 50000, code: 'SBIAXIS50k' },
    { amount: 100000, code: 'SBIAXIS100k' },
    { amount: 200000, code: 'SBIAXIS200k' }
  ],
  indosat: [
    { amount: 5000, code: 'SBIINDOSAT5k' },
    { amount: 10000, code: 'SBIINDOSAT10k' },
    { amount: 25000, code: 'SBIINDOSAT25k' },
    { amount: 50000, code: 'SBIINDOSAT50k' },
    { amount: 100000, code: 'SBIINDOSAT100k' },
    { amount: 200000, code: 'SBIINDOSAT200k' }
  ],
  smartfren: [
    { amount: 5000, code: 'SBISMARTFREN5k' },
    { amount: 10000, code: 'SBISMARTFREN10k' },
    { amount: 25000, code: 'SBISMARTFREN25k' },
    { amount: 50000, code: 'SBISMARTFREN50k' },
    { amount: 100000, code: 'SBISMARTFREN100k' },
    { amount: 200000, code: 'SBISMARTFREN200k' }
  ],
  telkomsel: [
    { amount: 5000, code: 'SBITELKOMSEL5k' },
    { amount: 10000, code: 'SBITELKOMSEL10k' },
    { amount: 25000, code: 'SBITELKOMSEL25k' },
    { amount: 50000, code: 'SBITELKOMSEL50k' },
    { amount: 100000, code: 'SBITELKOMSEL100k' },
    { amount: 200000, code: 'SBITELKOMSEL200k' }
  ],
  tri: [
    { amount: 5000, code: 'SBITRI5k' },
    { amount: 10000, code: 'SBITRI10k' },
    { amount: 25000, code: 'SBITRI25k' },
    { amount: 30000, code: 'SBITRI30k' },
    { amount: 50000, code: 'SBITRI50k' },
    { amount: 100000, code: 'SBITRI100k' }
  ],
  xl: [
    { amount: 5000, code: 'SBIXL5k' },
    { amount: 10000, code: 'SBIXL10k' },
    { amount: 25000, code: 'SBIXL25k' },
    { amount: 50000, code: 'SBIXL50k' },
    { amount: 100000, code: 'SBIXL100k' },
    { amount: 200000, code: 'SBIXL200k' }
  ],
};
const DenominationButtons = ({ provider, selected, onSelect }) => {
    if (!provider) return null;
  
    const handleSelect = (denomination) => {
      onSelect(denomination.amount, denomination.code);
    };
  
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Nominal</label>
        <div className="grid grid-cols-3 gap-2">
          {denominations[provider]?.map((denomination) => (
            <button
              key={denomination.amount}
              onClick={() => handleSelect(denomination)}
              className={`p-2 border rounded-lg flex items-center justify-between transition-all duration-200 ${
                selected?.amount === denomination.amount
                  ? 'bg-blue-100 border-blue-500 shadow-lg'
                  : 'border-gray-300 hover:shadow'
              }`}
            >
              <FaMoneyBillWave className="text-sky-500" />
              <span>Rp{denomination.amount.toLocaleString()}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

export default DenominationButtons;
