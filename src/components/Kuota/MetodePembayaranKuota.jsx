import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { paymentIcons } from "../../assets/images/MetodePembayaran/paymentIcons";

const paymentMethods = [
  { id: 'indomaret', name: 'Indomaret / Ceriamart', icon: paymentIcons.indomaret, color: 'bg-white' },
  { id: 'alfamart', name: 'Alfamart / Alfamidi / Dan+Dan', icon: paymentIcons.alfamart, color: 'bg-white' },
  { id: 'klikbca', name: 'KlikBCA', icon: paymentIcons.klikbca, color: 'bg-white' },
  // Tambahkan metode pembayaran tambahan di sini
];

const MetodePembayaranKuota = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { provider, denomination, phoneNumber, totalHarga = 0 } = location.state || {};  
  const [selectedMethod, setSelectedMethod] = useState('');
  const [error, setError] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showMoreMethods, setShowMoreMethods] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ''; 
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleSelection = (methodId) => {
    setSelectedMethod(methodId);
    setError(''); 
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
          provider,
          denomination,
          phoneNumber,
        },
      });
    } else {
      setError('Silakan pilih metode pembayaran.');
    }
  };

  const toggleShowMoreMethods = () => {
    setShowMoreMethods(!showMoreMethods);
  };

  const methodsToDisplay = showMoreMethods ? paymentMethods : paymentMethods.slice(0, 3);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto p-2 flex flex-col h-screen justify-between">
        <div className="flex-grow">
          <div className="sticky top-0 bg-white z-10 border-b">
            <div className="flex items-center p-2">
              <button onClick={handleBack} className="mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h1 className="text-lg font-semibold">Metode Pembayaran</h1>
            </div>
          </div>

          <div className="px-4 pt-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Metode pembayaran</h2>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-800 border border-red-300 rounded">
                {error}
              </div>
            )}

            <div className="space-y-3">
              {methodsToDisplay.map((method) => (
                <button
                  key={method.id}
                  className={`w-96 p-1 flex items-center justify-between text-left rounded-lg transition-all duration-200 transform hover:scale-105 ${method.color} hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 ${selectedMethod === method.id ? 'ring-1 ring-sky-500' : ''}`}
                  onClick={() => handleSelection(method.id)}
                  aria-label={`Pilih ${method.name}`}
                >
                  <div className="flex items-center space-x-6">
                    <img src={method.icon} alt={`${method.name} icon`} className="w-10 h-10 object-contain" />
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
              
              {!showMoreMethods && (
                <div className="flex justify-center">
                  <button className="text-green-600 font-semibold" onClick={toggleShowMoreMethods}>
                    Lihat Semua
                  </button>
                </div>
              )}
              
              {showMoreMethods && (
                <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50 p-4">
                  <div className="max-w-md mx-auto p-2 flex flex-col bg-white border rounded shadow-md h-[70vh] overflow-x-hidden">
                    <div className="sticky top-0 bg-white z-10 flex items-center justify-start space-x-1 p-2 border-b">
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <p className="text-lg font-bold">Metode Pembayaran Tambahan</p> 
                    </div>
                    <div className="overflow-y-auto space-y-3">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className={`w-96 p-1 flex items-center justify-between text-left rounded-lg transition-all duration-200 transform ${method.color} hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500`}
                        >
                          <div className="flex items-center space-x-6">
                            <img src={method.icon} alt={`${method.name} icon`} className="w-10 h-10 object-contain" />
                            <div className="flex flex-col">
                              <span className="font-medium text-gray-700">{method.name}</span>
                              {/* Optional additional details */}
                              {/* <span className="text-xs text-red-600">Saldo tidak mencukupi</span> */}
                              {/* <span className="text-xs text-gray-600">Tidak Tersedia untuk Transaksi Ini</span> */}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-1 border-t-8 pt-4">
              <h3 className="text-gray-800 font-semibold">Ringkasan pembayaran</h3>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Total Belanja</p>
                <p className="text-base text-gray-800">Rp{totalHarga.toLocaleString()}</p>
              </div>
            </div>

          </div>
        </div>

        <div className="sticky bottom-0 bg-white shadow-md p-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Total Harga</span>
              <span className="text-lg font-bold text-black">
                Rp{totalHarga.toLocaleString()}
              </span>
            </div>
            <button
              onClick={handleContinue}
              disabled={!selectedMethod || error}
              className={`px-8 py-3 rounded-full text-white text-sm font-semibold ${
                !selectedMethod || error
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-sky-500 hover:bg-sky-600'
              }`}
            >
              Lanjutkan
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
                  className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition ease-in-out duration-150"
                  onClick={handleConfirmLeave}
                >
                  Keluar
                </button>
                <button
                  className="w-full bg-gray-300 text-gray-700 py-2 rounded font-medium hover:bg-gray-400 transition ease-in-out duration-150"
                  onClick={handleCancelLeave}
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetodePembayaranKuota;
