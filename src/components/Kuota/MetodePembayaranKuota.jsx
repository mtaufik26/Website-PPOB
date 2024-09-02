import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../Card';

const paymentMethods = [
  { id: 'indomaret', name: 'Indomaret / Ceriamart', icon: '🏪', color: 'bg-white' },
  { id: 'alfamart', name: 'Alfamart / Alfamidi / Lawson / Dan+Dan', icon: '🏪', color: 'bg-white' },
  { id: 'klikbca', name: 'KlikBCA', icon: '🏦', color: 'bg-white' },
];

const MetodePembayaranKuota = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { provider, denomination, phoneNumber } = location.state || {};
  const [selectedMethod, setSelectedMethod] = useState('');
  const [error, setError] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ''; // Chrome requires returnValue to be set
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleSelection = (methodId) => {
    setSelectedMethod(methodId);
    setError(''); // Reset error on selection
  };

  const handleBack = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmLeave = () => {
    navigate(-1);
  };

  const handleCancelLeave = () => {
    setShowConfirmDialog(false);
  };

  const handleContinue = () => {
    if (selectedMethod) {
      navigate('/confirmation-kuota', {
        state: {
          selectedMethod,
          provider: provider,
          denomination: {
            harga: denomination.harga,
            diskon: denomination.diskon,
            kode: denomination.kode,
            nama: denomination.nama,
          },
          phoneNumber: phoneNumber,
        },
      });
    } else {
      setError('Silakan pilih metode pembayaran.');
    }
  };

  const totalHarga = 75045; // Replace with your dynamic total price

  return (
    <div className="max-w-md mx-auto bg-white h-screen justify-between">
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="flex items-center p-4">
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
          <h1 className="text-lg font-semibold">Pembayaran</h1>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Metode pembayaran</h2>
          <button className="text-green-600 font-semibold">Lihat Semua</button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 border border-red-300 rounded">
            {error}
          </div>
        )}

        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              className={`w-full p-4 flex items-center justify-between text-left rounded-lg transition-all duration-200 transform hover:scale-105 ${method.color} hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                selectedMethod === method.id ? 'ring-2 ring-sky-600' : ''
              }`}
              onClick={() => handleSelection(method.id)}
              aria-label={`Pilih ${method.name}`}
            >
              <div className="flex items-center space-x-4">
                <img src={`/icons/${method.id}.png`} alt={`${method.name} icon`} className="w-6 h-6" />
                <span className="font-medium text-gray-700">{method.name}</span>
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

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-800 font-semibold">Ringkasan pembayaran</h3>
            <p className="text-lg font-bold text-gray-800">Rp{totalHarga}</p>
          </div>
          <p className="text-sm text-gray-600">Total Belanja</p>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white shadow-md p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Total Tagihan</span>
            <span className="text-lg font-bold text-black">
              Rp{totalHarga}
            </span>
          </div>
          <button
            onClick={handleContinue}
            disabled={!selectedMethod || error}
            className={`px-4 py-2 rounded-full text-white text-sm font-semibold ${
              !selectedMethod || error
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-sky-500 hover:bg-sky-600'
            }`}
          >
            Lanjut Verifikasi
          </button>
        </div>
      </div>

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white py-6 px-8 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold text-center">Keluar halaman ini?</h3>
            <p className="mt-4 text-gray-700 text-center">Transaksi tidak akan diproses jika kamu meninggalkan halaman ini.</p>
            <div className="mt-6 flex flex-col items-center space-y-4">
              <button
                className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition ease-in-out"
                onClick={handleCancelLeave}
              >
                Lanjut Bayar
              </button>
              <button
                className="text-blue-600"
                onClick={handleConfirmLeave}
              >
                Keluar Halaman
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetodePembayaranKuota;
