import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pln from './Pln';
import Card from '../Card';

const ElectricityForm = () => {
  const [selectedOperator, setSelectedOperator] = useState('Token Listrik');
  const [selectedNominal, setSelectedNominal] = useState(null);
  const [meteranId, setMeteranId] = useState('');
  const [meteranIdError, setMeteranIdError] = useState('');
  const [notification, setNotification] = useState('');
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [nominalNotSelectedError, setNominalNotSelectedError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckButtonClicked, setIsCheckButtonClicked] = useState(false);
  const navigate = useNavigate();

  const operators = ['Token Listrik', 'Tagihan Listrik', 'PLN Non-Taglis'];
  const nominals = [
    { value: 20000, admin: 500 },
    { value: 50000, admin: 500 },
    { value: 100000, admin: 500 },
    { value: 200000, admin: 500 },
    { value: 500000, admin: 500 },
    { value: 1000000, admin: 500 },
  ];

  useEffect(() => {
    if (selectedOperator === 'Tagihan Listrik') {
      navigate('/tagihan-listrik');
    }
  }, [selectedOperator, navigate]);

  const handleMeteranIdChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setMeteranId(value);
    setNotification('');
    setPurchaseDetails(null);
    setNominalNotSelectedError('');
    setIsCheckButtonClicked(false);

    if (value.length < 11 && value.length > 0) {
      setMeteranIdError('Nomor terlalu pendek | minimal 11 karakter');
    } else if (value.length > 12) {
      setMeteranIdError('Nomor terlalu panjang | maksimum 12 karakter');
    } else {
      setMeteranIdError('');
    }
  };

  const handleCheckMeteranId = () => {
    if (meteranId.length >= 11 && meteranId.length <= 12) {
      setIsLoading(true); // Start loading
  
      setTimeout(() => {
        if (!selectedNominal) {
          setNominalNotSelectedError('Pilih nominal sebelum melanjutkan.');
        } else {
          setNotification('Nomor valid! Anda bisa melanjutkan.');
          setPurchaseDetails({
            amount: selectedNominal,
            id: meteranId,
            name: '',
            rate: '',
          });
          setNominalNotSelectedError('');
          setIsCheckButtonClicked(true); // Set menjadi true ketika tombol cek berhasil ditekan
        }
        setIsLoading(false); // End loading
      }, 2000); // Simulated delay (2 seconds)
    } else {
      setNotification('Nomor tidak valid! Periksa kembali nomor yang Anda masukkan.');
      setPurchaseDetails(null);
      setIsCheckButtonClicked(false); // Pastikan tetap false jika cek gagal
    }
  };
  

  const handlePaymentSelection = () => {
    if (meteranId.length >= 11 && selectedNominal && isCheckButtonClicked) {
      const fee = getAdminFee();
      console.log('Admin Fee:', fee); // Debug: cek nilai adminFee

      navigate('/payment-selection', {
        state: {
          selectedNominal,
          meteranId,
          adminFee: fee,  // Pastikan ini benar
          productType: 'electricity',
        },
      });
      
    } else {
      if (!selectedNominal) {
        setNominalNotSelectedError('Pilih nominal sebelum melanjutkan.');
      }
      if (meteranId.length < 11) {
        setMeteranIdError('Nomor harus minimal 11 digit untuk melanjutkan.');
      }
    }
  };


  const getAdminFee = () => {
    const selectedNominalObj = nominals.find(nominal => nominal.value === selectedNominal);
    return selectedNominalObj ? selectedNominalObj.admin : 0;
  };

  return (
    <Card className="max-w-md mx-auto bg-white rounded-lg overflow-hidden">
      <div className="p-2 border-b flex items-center">
        <button className="mr-4" onClick={() => navigate('/')} aria-label="Back">
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
        <h1 className="text-xl font-semibold">Listrik PLN</h1>
      </div>
      <div className="p-4">
        <h2 className="text-sm text-gray-600 mb-2">Select Operator</h2>
        {operators.map((op) => (
          <label key={op} className="flex items-center mb-2">
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
      <div className="px-4 mb-4">
        <label className="block text-sm text-gray-600 mb-1">No. Meter/ID Pel</label>
        <div className="flex items-center relative">
          <input
            type="text"
            value={meteranId}
            onChange={handleMeteranIdChange}
            className="border rounded px-3 py-2 w-full pr-20 focus:outline-none shadow"
            aria-label="Meter/ID Input"
          />
          <button
            className={`absolute right-2 px-3 py-1 rounded ${
              !selectedNominal ? ' text-gray-600 cursor-not-allowed' : ' text-sky-500'
            }`}
            onClick={handleCheckMeteranId}
            aria-label="Check Meteran ID"
            disabled={!selectedNominal || isLoading} // Disable if no nominal is selected or if it's loading
          >
            {isLoading ? 'Memproses...' : 'Cek'}
          </button>
        </div>
        {meteranIdError && (
          <span className="text-red-500 text-sm mt-1">{meteranIdError}</span>
        )}
        {notification && (
          <span
            className={`text-sm mt-1 ${notification.includes('tidak valid') ? 'text-red-500' : 'text-green-500'}`}
          >
            {notification}
          </span>
        )}
        {nominalNotSelectedError && (
          <span className="text-red-500 text-sm mt-1">{nominalNotSelectedError}</span>
        )}
      </div>
      
      {purchaseDetails && (
        <div className="bg-gray-200 p-4 rounded-xl mb-4">
          <h3 className="text-sm text-gray-600 mb-2">Detail Pembelian</h3>
          <p className="text-sm">Jenis Layanan: Rp {purchaseDetails.amount ? purchaseDetails.amount.toLocaleString() : '0'}</p>
          <p className="text-sm">Nomor: {purchaseDetails.id}</p>
          <p className="text-sm">Nama: {purchaseDetails.name || '-'}</p>
          <p className="text-sm">Tarif/Daya: {purchaseDetails.rate || '-'}</p>
        </div>
      )}

      <div className="px-4 mb-4">
        <h2 className="text-sm text-gray-600 mb-2">Nominal</h2>
        <div className="grid grid-cols-2 gap-4">
          {nominals.map((nominal) => (
            <Pln
              key={nominal.value}
              nominal={nominal}
              isSelected={selectedNominal === nominal.value}
              onClick={() => {
                if (meteranId.length >= 11) {
                  setSelectedNominal(nominal.value);
                  setMeteranIdError('');
                  setNominalNotSelectedError('');
                } else {
                  setMeteranIdError(
                    'Isi nomor meteran minimal 11 digit untuk memilih nominal.'
                  );
                }
              }}
            />
          ))}
        </div>
      </div>
      <div className="sticky bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Total Harga</p>
            <p className="text-xl font-bold">
              Rp{selectedNominal ? (selectedNominal + getAdminFee()).toLocaleString() : 0}
            </p>
          </div>
          <button
            className={`bg-sky-500 text-white px-6 py-2 rounded-lg font-semibold transition duration-300`}
            onClick={handlePaymentSelection}
            disabled={!selectedNominal || meteranIdError || meteranId.length < 11 || !isCheckButtonClicked}
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ElectricityForm;
