import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { KuotaPaketData } from './KuotaPaketData';
import KuotaPaketItem from './KuotaPaketItem';
import KuotaProvider from './KuotaProvider';
import InputNumber from './KuotaInputNumber';

const KuotaPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedProvider, setSelectedProvider] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(location.state?.phoneNumber || '');
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedProvider) {
      setPackages(KuotaPaketData[selectedProvider]?.packages || []);
    } else {
      setPackages([]);
    }
    setSelectedPackage('');
  }, [selectedProvider]);

  const handleFormSubmit = () => {
    const selectedPackageDetails = packages.find(pkg => pkg.productCode === selectedPackage);

    if (!selectedPackageDetails) {
      setErrorMessage('Paket yang dipilih tidak valid.');
      return;
    }

    const originalPrice = parseInt(selectedPackageDetails.harga.replace(/\./g, ''), 10);
    const hargaBaru = selectedPackageDetails.diskon
      ? (originalPrice * (100 - selectedPackageDetails.diskon) / 100).toFixed(0)
      : originalPrice;

    const totalHarga = parseInt(hargaBaru, 10).toLocaleString();

    navigate('/metode-pembayaran-kuota', {
      state: {
        provider: selectedProvider,
        denomination: {
          type: 'kuota',
          harga: originalPrice.toString(),
          diskon: selectedPackageDetails.diskon,
          productCode: selectedPackageDetails.productCode,
          nama: selectedPackageDetails.nama,
        },
        phoneNumber: phoneNumber,
        totalHarga: totalHarga,
      },
    });
  };

  const handleBack = () => navigate('/');

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    if (value.length >= 10 && value.length <= 15 && value.startsWith('08')) {
      setErrorMessage('');
    } else if (!value.startsWith('08')) {
      setErrorMessage('Nomor telepon harus dimulai dengan 08.');
    } else if (value.length < 10) {
      setErrorMessage('Nomor telepon terlalu singkat.');
    } else if (value.length > 15) {
      setErrorMessage('Nomor telepon terlalu panjang.');
    } else {
      setErrorMessage('Nomor telepon tidak valid.');
    }
  };

  const selectedPackageDetails = packages.find(pkg => pkg.productCode === selectedPackage);
  const totalHarga = selectedPackageDetails
    ? selectedPackageDetails.diskon
      ? (parseInt(selectedPackageDetails.harga.replace(/\./g, ''), 10) * (100 - selectedPackageDetails.diskon) / 100).toLocaleString()
      : parseInt(selectedPackageDetails.harga.replace(/\./g, ''), 10).toLocaleString()
    : '0';

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
              <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Paket</label>
              {packages.map((pkg, index) => {
                const hargaBaru = pkg.diskon
                  ? (parseInt(pkg.harga.replace(/\./g, ''), 10) * (100 - pkg.diskon) / 100).toFixed(0)
                  : pkg.harga;
                
                return (
                  <KuotaPaketItem
                    key={index}
                    {...pkg}
                    hargaBaru={hargaBaru}
                    isSelected={pkg.productCode === selectedPackage}
                    onClick={() => setSelectedPackage(pkg.productCode)}
                  />
                );
              })}
            </div>
          )}
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

export default KuotaPage;
