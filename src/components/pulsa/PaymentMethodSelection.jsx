import React, { useState } from 'react';
import Card from '../Card';

const paymentMethods = [
  { id: 'gopay', name: 'GoPay', icon: '💳', color: 'bg-blue-100' },
  { id: 'ovo', name: 'OVO', icon: '💳', color: 'bg-purple-100' },
  { id: 'dana', name: 'DANA', icon: '💳', color: 'bg-indigo-100' },
  { id: 'bca', name: 'BCA Virtual Account', icon: '🏦', color: 'bg-green-100' },
  { id: 'mandiri', name: 'Mandiri Virtual Account', icon: '🏦', color: 'bg-yellow-100' },
];

const PaymentMethodSelection = ({ onSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleSelection = (methodId) => {
    setSelectedMethod(methodId);
  };

  const handleContinue = () => {
    if (selectedMethod) {
      onSelect(selectedMethod);
    } else {
      alert('Silakan pilih metode pembayaran');
    }
  };

  return (
    <Card className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Pilih Metode Pembayaran</h2>
      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            className={`w-full p-4 flex items-center justify-between text-left rounded-lg transition-all duration-200 transform hover:scale-105 ${method.color} hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 ${
              selectedMethod === method.id ? 'ring-2 ring-sky-500' : ''
            }`}
            onClick={() => handleSelection(method.id)}
            aria-label={`Pilih ${method.name}`}
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">{method.icon}</span>
              <span className="font-medium text-gray-700">{method.name}</span>
            </div>
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        ))}
      </div>
      <button
        className="mt-6 w-full bg-sky-500 text-white py-3 rounded-lg font-semibold"
        onClick={handleContinue}
        disabled={!selectedMethod}
      >
        Lanjutkan
      </button>
    </Card>
  );
};

export default PaymentMethodSelection;
