import React, { useState } from 'react';

const PulsaForm = ({ onPhoneNumberChange, warning = '' }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    const filteredInput = input.replace(/[^0-9]/g, '');
    setPhoneNumber(filteredInput);
    onPhoneNumberChange(filteredInput);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div className="mb-4">
      <form className="flex flex-col">
        <label className="block text-sm text-gray-600 mb-1">No. Hp</label>
        <div className="flex flex-col">
          <input
            type="text"
            value={phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded mb-1"
          />
          {warning && <div className="text-red-500 text-sm mt-1">{warning}</div>}
        </div>
      </form>
    </div>
  );
};

export default PulsaForm;
