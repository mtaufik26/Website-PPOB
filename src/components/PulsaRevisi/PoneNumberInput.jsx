import React from 'react';

const PhoneNumberInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    onChange(input);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Nomor HP</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={13}
        placeholder="08xxxxxxxxxx"
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2  shadow"
      />
    </div>
  );
};

export default PhoneNumberInput;
