import React, { useState } from 'react';

const PulsaForm = ({ onPhoneNumberChange, warning = '' }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;
    const filteredInput = input.replace(/[^0-9]/g, '');

    if (!filteredInput.startsWith('08') && filteredInput !== '') {
      setError('Nomor harus dimulai dengan 08');
    } else if (filteredInput.length < 10 && filteredInput !== '') {
      setError('Nomor terlalu pendek | minimal 11 karakter');
    } else {
      setError('');
    }

    setPhoneNumber(filteredInput);
    onPhoneNumberChange(filteredInput);
  };

  const handleBlur = () => {
    if (phoneNumber.length < 10 && phoneNumber !== '') {
      setError('Nomor terlalu pendek');
    }
  };

  return (
    <div className="mb-4">
      <div className="flex flex-col">
        <label className="block text-sm text-gray-600 mb-1">No. Hp</label>
        <div className="flex flex-col">
          <input
            type="text"
            value={phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded mb-1 shadow focus:outline-none"
          />
          {(error || warning) && <div className="text-red-500 text-sm mt-1">{error || warning}</div>}
        </div>
      </div>
    </div>
  );
};

export default PulsaForm;
