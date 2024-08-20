// PaymentPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '../Card'; 

const paymentMethods = [
  { id: 'gopay', name: 'GoPay', icon: '💳', color: 'bg-blue-100' },
  { id: 'ovo', name: 'OVO', icon: '💳', color: 'bg-purple-100' },
  { id: 'dana', name: 'DANA', icon: '💳', color: 'bg-indigo-100' },
  { id: 'linkaja', name: 'LinkAja', icon: '💳', color: 'bg-red-100' },
  { id: 'bca', name: 'BCA Virtual Account', icon: '🏦', color: 'bg-green-100' },
  { id: 'mandiri', name: 'Mandiri Virtual Account', icon: '🏦', color: 'bg-yellow-100' },
];

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const { total, phone, nominal, adminFee, walletName } = location.state || {};

  useEffect(() => {
    if (!total || !phone || !nominal) {
      navigate('/', { replace: true });
    }
  }, [total, phone, nominal, navigate]);

  const handleSelection = (methodId) => {
    setSelectedMethod(methodId);
    setError('');
  };

  const handleContinue = () => {
    if (selectedMethod) {
      setError('');
      navigate('/confirmation', {
        state: {
          selectedMethod,
          total,
          phone,
          nominal,
          adminFee,
        },
      });
    } else {
      setError('Silakan pilih metode pembayaran');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Card className="max-w-md mx-auto p-6">
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="flex items-center p-2">
          <button onClick={handleBack} className="mr-4" aria-label="Back">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">Pilih Metode</h1>
        </div>
      </div>
      <div className="max-w-md mx-auto p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Pilih Metode Pembayaran</h2>
        <div className="space-y-3">
          {paymentMethods.map((method) => {
            const isDisabled = (walletName.toLowerCase() === 'dana' && method.id === 'dana') ||
                               (walletName.toLowerCase() === 'linkaja' && method.id === 'linkaja');

            return (
              <div key={method.id} className={`relative ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <button
                  className={`w-full p-4 flex items-center justify-between text-left rounded-lg transition-all duration-200 transform hover:scale-105 ${method.color} hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    selectedMethod === method.id ? 'ring-2 ring-sky-500' : ''
                  }`}
                  onClick={() => !isDisabled && handleSelection(method.id)}
                  aria-label={`Pilih ${method.name}`}
                  disabled={isDisabled}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{method.icon}</span>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-700">{method.name}</span>
                      {isDisabled && (
                        <span className="text-sm text-gray-500">Tidak Tersedia untuk Transaksi Ini</span>
                      )}
                    </div>
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
              </div>
            );
          })}
        </div>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <button
          className="mt-6 w-full bg-sky-500 text-white py-3 rounded-lg font-semibold"
          onClick={handleContinue}
          disabled={!selectedMethod}
        >
          Lanjutkan
        </button>
      </div>
    </Card>
  );
};

export default PaymentPage;
