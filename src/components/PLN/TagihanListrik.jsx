import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TagihanListrik = () => {
  const navigate = useNavigate();
  const [meteranId, setMeteranId] = useState('');
  const [meteranIdError, setMeteranIdError] = useState('');
  const [notification, setNotification] = useState('');
  const [totalHarga, setTotalHarga] = useState(0);

  const handleBack = () => {
    navigate('/');
  };

  const handleOperatorChange = (selectedOperator) => {
    if (selectedOperator === 'Token Listrik') {
      navigate('/pln');
    }
  };

  const handleMeteranIdChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setMeteranId(value);
    setNotification('');

    setMeteranIdError(
      value.length !== 12 ? 'Nomor Pembayaran Harus 12 Digit' : ''
    );
  };

  const handleCheckMeteranId = () => {
    if (meteranId.length === 12) {
      setNotification('Tidak Ada tagihan');
      setTotalHarga(0);
    }
  };

  return (
    <div className="max-w-md mx-auto p-2 flex flex-col h-screen justify-between">
      <div className="flex-grow">
        <div className="sticky top-0 bg-white z-10 border-b">
          <div className="flex items-center p-2">
            <button className="mr-4" onClick={handleBack} aria-label="Back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold">Listrik PLN</h1>
          </div>
        </div>

        <div className="max-w-lg mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Listrik PLN</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-3">Pilih Operator</label>
            <div className="flex flex-col space-y-2">
              {['Token Listrik', 'Tagihan Listrik', 'PLN Non-Taglis'].map((op) => (
                <label key={op} className="flex items-center">
                  <input
                    type="radio"
                    name="operator"
                    value={op}
                    checked={op === 'Tagihan Listrik'}
                    onChange={() => handleOperatorChange(op)}
                    className="mr-2 w-5 h-5 text-sky-500"
                  />
                  <span className="text-sm">{op}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">No. Meter/ID Pel</label>
            <div className="relative">
              <input
                type="text"
                value={meteranId}
                onChange={handleMeteranIdChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 ${
                  meteranIdError ? 'focus:ring-red-500 border-red-500' : 'focus:ring-sky-500 border-gray-300'
                } shadow-sm`}
                placeholder="Masukkan 12 digit nomor"
                aria-label="Meter/ID Input"
              />
              <button
                className={`absolute right-2 top-1 px-4 py-2 rounded-lg ${
                  meteranId.length !== 12 ? 'bg-gray-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600'
                } text-white`}
                onClick={handleCheckMeteranId}
                disabled={meteranId.length !== 12}
                aria-label="Check Meteran ID"
              >
                Cek
              </button>
            </div>
            {meteranIdError && (
              <p className="text-red-500 text-sm mt-2">{meteranIdError}</p>
            )}
            {notification && (
              <p className={`text-sm mt-2 ${notification.includes('Tidak Ada tagihan') ? 'text-red-500' : 'text-green-500'}`}>
                {notification}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white shadow-md p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Total Harga</span>
            <span className="text-lg font-bold text-black">Rp{totalHarga.toLocaleString()}</span>
          </div>
          <button
            className={`px-4 py-2 rounded-full text-white text-sm font-semibold ${
              totalHarga === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600'
            }`}
            disabled={totalHarga === 0}
            aria-label="Select Payment"
          >
            Pilih Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default TagihanListrik;
