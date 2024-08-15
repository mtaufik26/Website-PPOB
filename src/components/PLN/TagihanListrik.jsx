import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card';

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
    <Card className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-2 border-b flex items-center">
        <button className="mr-4" onClick={handleBack} aria-label="Back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold">Listrik PLN</h1>
      </div>

      <div className="p-4">
        <h2 className="text-sm text-gray-600 mb-2">Select Operator</h2>
        {['Token Listrik', 'Tagihan Listrik', 'PLN Non-Taglis'].map((op) => (
          <label key={op} className="flex items-center mb-2">
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

      <div className="p-4">
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">No. Meter/ID Pel</label>
          <div className="flex items-center relative">
            <input
              type="text"
              value={meteranId}
              onChange={handleMeteranIdChange}
              className="border rounded px-3 py-2 w-full pr-20 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Masukkan 12 digit nomor"
            />
            <button
              className={`absolute right-2 px-3 py-1 rounded ${
                meteranId.length !== 12 ? 'bg-gray-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600'
              } text-white`}
              onClick={handleCheckMeteranId}
              disabled={meteranId.length !== 12}
            >
              Cek
            </button>
          </div>
          {meteranIdError && (
            <span className="text-red-500 text-sm mt-1">{meteranIdError}</span>
          )}
          {notification && (
            <span className={`text-sm mt-1 ${notification.includes('Tidak Ada tagihan') ? 'text-red-500' : 'text-green-500'}`}>
              {notification}
            </span>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Total Harga</p>
            <p className="text-xl font-bold">Rp{totalHarga.toLocaleString()}</p>
          </div>
          <button
            className={`bg-sky-500 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 ${
              totalHarga === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-600'
            }`}
            disabled={totalHarga === 0}
            aria-label="Select Payment"
          >
            Pilih Pembayaran
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TagihanListrik;
