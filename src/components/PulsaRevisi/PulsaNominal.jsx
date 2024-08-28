// import React, { useMemo } from 'react';
// import classNames from 'classnames';

// const denominations = {
//   axis: [
//     { amount: 5000, code: 'SBIAXIS5k' },
//     { amount: 10000, code: 'SBIAXIS10k' },
//     { amount: 25000, code: 'SBIAXIS25k' },
//     { amount: 50000, code: 'SBIAXIS50k' },
//     { amount: 100000, code: 'SBIAXIS100k' },
//     { amount: 200000, code: 'SBIAXIS200k' }
//   ],
//   indosat: [
//     { amount: 5000, code: 'SBIINDOSAT5k' },
//     { amount: 10000, code: 'SBIINDOSAT10k' },
//     { amount: 25000, code: 'SBIINDOSAT25k' },
//     { amount: 50000, code: 'SBIINDOSAT50k' },
//     { amount: 100000, code: 'SBIINDOSAT100k' },
//     { amount: 200000, code: 'SBIINDOSAT200k' }
//   ],
//   smartfren: [
//     { amount: 5000, code: 'SBISMARTFREN5k' },
//     { amount: 10000, code: 'SBISMARTFREN10k' },
//     { amount: 25000, code: 'SBISMARTFREN25k' },
//     { amount: 50000, code: 'SBISMARTFREN50k' },
//     { amount: 100000, code: 'SBISMARTFREN100k' },
//     { amount: 200000, code: 'SBISMARTFREN200k' }
//   ],
//   telkomsel: [
//     { amount: 5000, code: 'SBITELKOMSEL5k' },
//     { amount: 10000, code: 'SBITELKOMSEL10k' },
//     { amount: 25000, code: 'SBITELKOMSEL25k' },
//     { amount: 50000, code: 'SBITELKOMSEL50k' },
//     { amount: 100000, code: 'SBITELKOMSEL100k' },
//     { amount: 200000, code: 'SBITELKOMSEL200k' }
//   ],
//   tri: [
//     { amount: 5000, code: 'SBITRI5k' },
//     { amount: 10000, code: 'SBITRI10k' },
//     { amount: 25000, code: 'SBITRI25k' },
//     { amount: 30000, code: 'SBITRI30k' },
//     { amount: 50000, code: 'SBITRI50k' },
//     { amount: 100000, code: 'SBITRI100k' }
//   ],
//   xl: [
//     { amount: 5000, code: 'SBIXL5k' },
//     { amount: 10000, code: 'SBIXL10k' },
//     { amount: 25000, code: 'SBIXL25k' },
//     { amount: 50000, code: 'SBIXL50k' },
//     { amount: 100000, code: 'SBIXL100k' },
//     { amount: 200000, code: 'SBIXL200k' }
//   ],
// };

// const DenominationButton = ({ denomination, isSelected, onSelect }) => (
//   <button
//     onClick={() => onSelect(denomination)}
//     className={classNames(
//       'p-2 rounded-lg flex items-center justify-center transition-all duration-200 text-lg font-semibold shadow',
//       isSelected
//         ? 'bg-blue-100 border-blue-500 shadow-lg'
//         : 'bg-white border border-gray-200 hover:shadow-md'
//     )}
//     aria-pressed={isSelected}
//   >
//     <span>Rp {denomination.amount.toLocaleString()}</span>
//   </button>
// );

// const DenominationButtons = ({ provider, selected, onSelect }) => {
//   const availableDenominations = useMemo(() => denominations[provider], [provider]);

//   if (!provider) return null;

//   const handleSelect = (denomination) => {
//     onSelect(denomination.amount, denomination.code);
//   };

//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-medium text-gray-700 mb-2">Nominal</label>
//       <div className="grid grid-cols-2 gap-4">
//         {availableDenominations?.map((denomination) => (
//           <DenominationButton
//             key={denomination.amount}
//             denomination={denomination}
//             isSelected={selected?.amount === denomination.amount}
//             onSelect={handleSelect}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DenominationButtons;



import React from 'react';
import classNames from 'classnames';

const PulsaNominal = ({ availableDenominations, handleDenominationSelect, denomination }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Nominal</label>
      <div className="grid grid-cols-2 gap-4">
        {availableDenominations?.map((denominationItem) => (
          <button
            key={denominationItem.amount}
            onClick={() =>
              handleDenominationSelect(denominationItem.amount, denominationItem.code)
            }
            className={classNames(
              'p-2 rounded-lg flex items-center justify-center transition-all duration-200 text-lg font-semibold shadow',
              denomination?.amount === denominationItem.amount
                ? 'bg-blue-100 border-blue-500 shadow-lg'
                : 'bg-white border border-gray-200 hover:shadow-md'
            )}
            aria-pressed={denomination?.amount === denominationItem.amount}
          >
            <span>Rp {denominationItem.amount.toLocaleString()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PulsaNominal;