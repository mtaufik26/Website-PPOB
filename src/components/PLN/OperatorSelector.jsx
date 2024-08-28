import React from 'react';

const OperatorSelector = ({ operators, selectedOperator, setSelectedOperator }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-3">Pilih Operator</label>
      <div className="flex flex-col space-y-2">
        {operators.map((op) => (
          <label key={op} className="flex items-center">
            <input
              type="radio"
              name="operator"
              value={op}
              checked={selectedOperator === op}
              onChange={(e) => setSelectedOperator(e.target.value)}
              className="mr-2 w-5 h-5 text-sky-500"
            />
            <span className="text-sm">{op}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default OperatorSelector;