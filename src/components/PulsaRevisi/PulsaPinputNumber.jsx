// import React, { useState } from 'react';

// const PhoneNumberInput = ({ value, onChange, onValid }) => {
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const input = e.target.value.replace(/[^0-9]/g, '');
//     onChange(input);

//     if (input && !input.startsWith('08')) {
//       setError('Nomor HP harus dimulai dengan "08".');
//       if (onValid) onValid(false);
//     } else if (input.length < 10) {
//       setError('Nomor HP terlalu pendek. Harus minimal 10 digit.');
//       if (onValid) onValid(false);
//     } else if (input.length > 13) {
//       setError('Nomor HP terlalu panjang. Harus maksimal 13 digit.');
//       if (onValid) onValid(false);
//     } else {
//       setError('');
//       if (onValid) onValid(true);
//     }
//   };

//   return (
//     <div className="mb-2">
//       <label className="block text-sm font-medium text-gray-700 mb-2">Nomor HP</label>
//       <div className="relative">
//         <input
//           type="number"
//           value={value}
//           onChange={handleChange}
//           pattern="[0-9]*"
//           placeholder="08x"
//           className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-1 ${error ? 'focus:ring-red-500 border-red-500' : 'focus:ring-sky-500 border-gray-300'} shadow-sm`}
//         />
//       </div>
//       {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//     </div>
//   );
// };

// export default PhoneNumberInput;

import React from 'react';

const PhoneNumberInput = ({ phoneNumber, handlePhoneNumberChange, error }) => {
  return (
    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">Nomor HP</label>
      <div className="relative">
        <input
          type="number"
          value={phoneNumber}
          onChange={(e) => handlePhoneNumberChange(e.target.value)}
          pattern="[0-9]*"
          placeholder="08x"
          className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-1 ${
            error ? 'focus:ring-red-500 border-red-500' : 'focus:ring-sky-500 border-gray-300'
          } shadow-sm`}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;