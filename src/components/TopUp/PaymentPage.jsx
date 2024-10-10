import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '../Card';
import { paymentIcons } from "../../assets/images/MetodePembayaran/paymentIcons"; // Adjust the import path as necessary

const paymentMethods = [
  {
    id: 'ovo',
    name: 'OVO',
    icon: paymentIcons.ovo,
    category: 'Dompet Digital',
    color: 'bg-white',
  },
  {
    id: 'dana',
    name: 'DANA',
    icon: paymentIcons.dana,
    category: 'Dompet Digital',
    color: 'bg-white',
  },
  {
    id: 'indomaret',
    name: 'Indomaret / Ceriamart',
    icon: paymentIcons.indomaret,
    category: 'Gerai Offline',
    color: 'bg-white',
  },
  {
    id: 'alfamart',
    name: 'Alfamart / Alfamidi / Dan+Dan',
    icon: paymentIcons.alfamart,
    category: 'Gerai Offline',
    color: 'bg-white',
  },
  {
    id: 'klikbca',
    name: 'KlikBCA',
    icon: paymentIcons.bca,
    category: 'Internet Banking',
    color: 'bg-white',
  },
  {
    id: 'bri',
    name: 'Bank BRI',
    icon: paymentIcons.bri,
    category: 'Transfer Bank',
    color: 'bg-white',
  },
  {
    id: 'mandiri',
    name: 'Bank Mandiri',
    icon: paymentIcons.mandiri,
    category: 'Transfer Bank',
    color: 'bg-white',
  },
];

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [error, setError] = useState('');
  const [showMoreMethods, setShowMoreMethods] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { serviceType, total = 50000, phone, harga, productCode, walletName, productType } = location.state || {};

  useEffect(() => {
    if (!total) {
      navigate('/', { replace: true });
    }
  }, [total, navigate]);

  const handleSelection = (methodId) => {
    setSelectedMethod(methodId);
    setError('');
  };

  const handleContinue = () => {
    if (!selectedMethod) {
      setError('Silakan pilih metode pembayaran');
      return;
    }

    navigate('/confirmation', {
      state: {
        selectedMethod,
        phone,
        harga,
        productCode,
        walletName,
        serviceType,
        productType,
      },
    });
  };

  const toggleShowMoreMethods = () => {
    setShowMoreMethods(!showMoreMethods);
  };

  return (
    <div className="max-w-md mx-auto p-2 flex flex-col h-screen justify-between">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="flex items-center p-2">
          <button onClick={() => navigate(-1)} className="mr-4">
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
          <h1 className="text-lg font-semibold">Metode Pembayaran</h1>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="px-4 pt-4 flex-grow overflow-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pilih Metode Pembayaran</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 border border-red-300 rounded">
            {error}
          </div>
        )}

        <div className="space-y-6">
          {paymentMethods.slice(0, 3).map((method) => (
            <button
              key={method.id}
              className={`w-full p-1 flex items-center justify-between text-left rounded-lg transition-all duration-200 transform hover:scale-105 ${method.color} hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 ${selectedMethod === method.id ? 'ring-1 ring-sky-500' : ''}`}
              onClick={() => handleSelection(method.id)}
              aria-label={`Pilih ${method.name}`}
            >
              <div className="flex items-center space-x-6">
                <img src={method.icon} alt={`${method.name} icon`} className="w-10 h-10 object-contain" />
                <div>
                  <span className="font-medium text-gray-700">{method.name}</span>
                </div>
              </div>
              <input
                type="radio"
                className="form-radio text-sky-500"
                checked={selectedMethod === method.id}
                onChange={() => handleSelection(method.id)}
              />
            </button>
          ))}
        </div>

        {/* Lihat Semua Button */}
        <div className="flex justify-center mt-6">
          <button
            className={`text-green-600 font-semibold ${showMoreMethods ? 'opacity-50 ' : ''}`}
            onClick={!showMoreMethods ? toggleShowMoreMethods : undefined}
            disabled={showMoreMethods}
          >
            Lihat Semua
          </button>
        </div>

        <div className="mt-4 border-t-8 pt-4">
          <h3 className="text-gray-800 font-semibold">Ringkasan Pembayaran</h3>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">Total Belanja</p>
            <p className="text-base text-gray-800">Rp{total.toLocaleString()}</p>
          </div>
        </div>

        {/* More Payment Methods (Modal Style) */}
        {showMoreMethods && (
          <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-500 ease-in-out">
            <div className="max-w-lg mx-auto px-6 flex flex-col bg-white border rounded-xl shadow-lg h-[80vh] overflow-x-hidden overflow-y-auto transition-transform duration-500 ease-in-out">
              <div className="sticky top-0 bg-white z-10 flex items-center justify-start space-x-1 p-4 border-b">
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={toggleShowMoreMethods}
                  aria-label="Tutup"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <p className="text-lg font-bold">Pilih Metode Pembayaran</p>
              </div>
              <div className="overflow-y-auto space-y-4 px-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between py-2 px-5 border-b cursor-pointer hover:bg-gray-50 rounded-lg"
                    onClick={() => handleSelection(method.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={method.icon}
                        alt={`${method.name} icon`}
                        className="w-16 h-16 object-contain"
                      />
                      <span className="font-medium text-gray-800">{method.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      

      {/* Payment Summary and Continue Button */}
      <div className="sticky bottom-0 bg-white shadow-md p-3 border-t">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Total Harga</span>
            <span className="text-lg font-bold text-black">Rp{total.toLocaleString()}</span>
          </div>
          <button
            onClick={handleContinue}
            disabled={!selectedMethod}
            className={`px-8 py-3 rounded-full text-white text-sm font-semibold ${
              !selectedMethod ? 'bg-gray-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600'
            }`}
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;