import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KuotaPaketData } from './KuotaPaketData';
// import KuotaPaketData from './KuotaPaketData';
import PaketItem from './KuotaPaketItem'; // Import komponen PaketItem
import KuotaProvider from './KuotaProvider'; // Import komponen KuotaProvider
import InputNumber from './KuotaInputNumber'; // Import komponen InputNumber

const Kuota = () => {
  const navigate = useNavigate();
  const [selectedProvider, setSelectedProvider] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber.startsWith('08')) {
      setErrorMessage('Nomor telepon harus dimulai dengan 08.');
    } else if (phoneNumber.length < 10 || phoneNumber.length > 15) {
      setErrorMessage('Nomor telepon harus antara 10 hingga 15 karakter.');
    } else if (!selectedPackage) {
      setErrorMessage('Pilih paket data.');
    } else {
      console.log('Selected Provider:', selectedProvider);
      console.log('Phone Number:', phoneNumber);
      console.log('Selected Package:', selectedPackage);
      setErrorMessage('');
      // Handle form submission logic here (e.g., API call)
    }
  };

  const handleBack = () => navigate('/');

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    if (value.length >= 10 && value.length <= 15 && value.startsWith('08')) {
      setErrorMessage('');
    } else if (!value.startsWith('08')) {
      setErrorMessage('Nomor telepon harus dimulai dengan 08.');
    } else if (value.length < 10) {
      setErrorMessage('Nomor telepon terlalu singkat, minimal 10 karakter.');
    } else if (value.length > 15) {
      setErrorMessage('Nomor telepon terlalu panjang, maksimal 15 karakter.');
    }
  };

  return (
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
            <h1 className="text-lg font-semibold">Kuota</h1>
          </div>
        </div>
        <div className="max-w-lg mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Pilih Paket Data</h1>
          <KuotaProvider selectedProvider={selectedProvider} setSelectedProvider={setSelectedProvider} />
          <InputNumber value={phoneNumber} onChange={handlePhoneNumberChange} errorMessage={errorMessage} />
          {selectedProvider && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Pilih Paket</label>
              {KuotaPaketData[selectedProvider].packages.map((pkg, index) => (
                <PaketItem
                  key={index}
                  {...pkg}
                  isSelected={pkg.kode === selectedPackage}
                  onClick={() => setSelectedPackage(pkg.kode)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="sticky bottom-0 bg-white shadow-md p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Total Harga</span>
            <span className="text-lg font-bold text-black">
              Rp{selectedPackage && selectedProvider && KuotaPaketData[selectedProvider]
                ? KuotaPaketData[selectedProvider].packages.find(pkg => pkg.kode === selectedPackage)?.hargaBaru || '0'
                : '0'}
            </span>
          </div>
          <button
            onClick={handleFormSubmit}
            disabled={!selectedPackage || !phoneNumber || errorMessage}
            className={`px-4 py-2 rounded-full text-white text-sm font-semibold ${
              !selectedPackage || !phoneNumber || errorMessage
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-sky-500 hover:bg-sky-600'
            }`}
          >
            Lanjut Verifikasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kuota;
