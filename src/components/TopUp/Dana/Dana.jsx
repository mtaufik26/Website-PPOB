import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../Card';

const danaOptions = [
  { amount: 5000, admin: 2000 },
  { amount: 10000, admin: 2000 },
  { amount: 25000, admin: 2000 },
  { amount: 40000, admin: 2000 },
  { amount: 50000, admin: 2000 },
  { amount: 60000, admin: 2000 },
  { amount: 75000, admin: 2000 },
  { amount: 80000, admin: 2000 },
  { amount: 90000, admin: 2000 },
  { amount: 100000, admin: 2000 },
  { amount: 150000, admin: 5000 },
  { amount: 200000, admin: 5000 },
  { amount: 300000, admin: 5000 },
  { amount: 500000, admin: 10000 },
];

const Dana = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(danaOptions[0]);
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [purchaseDetails, setPurchaseDetails] = useState(null);

  const handleBack = () => {
    navigate('/');
  };

  const handleCheck = () => {
    // Validate phone number starts with 08 and has at least 12 digits
    if (phone.length >= 12 && phone.startsWith('08')) {
      setErrorMessage('');
      setIsValid(true);
      // Set purchase details
      setPurchaseDetails({
        phone,
        amount: selectedOption.amount,
      });
    } else if (!phone.startsWith('08')) {
      setErrorMessage('Nomor telepon harus dimulai dengan 08.');
      setIsValid(false);
      setPurchaseDetails(null);
    } else {
      setErrorMessage('Nomor terlalu singkat | minimal 12 karakter.');
      setIsValid(false);
      setPurchaseDetails(null);
    }
  };

  const handlePilihPembayaran = () => {
    if (isValid) {
      navigate('/payment-page', {
        state: { 
          total: selectedOption.amount + selectedOption.admin, 
          phone, 
          nominal: selectedOption.amount,
          adminFee: selectedOption.admin 
        },
      });
    }
  };

  // Function to format phone number with hyphens
  const formatPhoneNumber = (number) => {
    if (number.length <= 0) return number;
    return number
      .replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')
      .replace(/(\d{4})(\d{4})/, '$1-$2')
      .replace(/(\d{4})(\d{2})/, '$1-$2');
  };

  return (
    <Card>
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="flex items-center p-2">
          <button onClick={handleBack} className="mr-4" aria-label="Go back">
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
          <h1 className="text-lg font-semibold">Dompet Digital</h1>
        </div>
      </div>
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Pilih Nominal Anda
        </label>
        <div className="relative mb-4">
          <select
            value={selectedOption.amount}
            onChange={(e) => setSelectedOption(danaOptions.find(option => option.amount === parseInt(e.target.value)))}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            {danaOptions.map((option) => (
              <option key={option.amount} value={option.amount}>
                Rp {option.amount.toLocaleString('id-ID')}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          No. Telepon
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="08xxxxxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ paddingRight: '60px' }}
          />
          <button
            onClick={handleCheck}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sky-500 px-4 py-1 rounded-lg"
          >
            Cek
          </button>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-xs italic mt-2">{errorMessage}</p>
        )}

        {isValid && purchaseDetails && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Detail Pembelian</h2>
            <p><strong>Nomor:</strong> {formatPhoneNumber(purchaseDetails.phone)}</p>
            <p><strong>Nama:</strong> DNI* {purchaseDetails.phone.slice(0, 9)}****</p>
            <p><strong>Nominal:</strong> Rp {purchaseDetails.amount.toLocaleString('id-ID')}</p>
          </div>
        )}

        <div className="mt-6 border-t pt-4 flex items-center justify-between">
          <div>
            <span className="text-gray-700 font-bold">Total Bayar</span>
            <p className="text-gray-700 font-bold">
              {isValid ? `Rp ${(selectedOption.amount + selectedOption.admin).toLocaleString('id-ID')}` : '-'}
            </p>
          </div>
          <button
            onClick={handlePilihPembayaran}
            className={`${
              isValid ? 'bg-blue-500' : 'bg-gray-200 text-gray-500'
            } py-2 px-4 rounded-lg font-semibold`}
            disabled={!isValid}
          >
            Lanjut Verifikasi
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Dana;
