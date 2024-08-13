import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card';

const KirimUang = () => {
  const [amount, setAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const MAX_AMOUNT = 10000000; // Batas transfer maksimum
  const MIN_AMOUNT = 10000; // Batas transfer minimum

  const handleSubmit = (e) => {
    e.preventDefault();
    const unformattedAmount = parseInt(amount.replace(/\./g, ''), 10);
    if (unformattedAmount > MAX_AMOUNT || unformattedAmount < MIN_AMOUNT) {
      setErrorMessage('Jumlah tidak valid.');
      return;
    }
    setErrorMessage('');
    navigate('/proses-pengiriman', {
      state: { amount, selectedBank, accountNumber }
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const formatAmount = (value) => {
    const cleanValue = value.replace(/\D/g, ''); // Remove all non-digit characters
    return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Add dot every three digits
  };

  const handleAmountChange = (e) => {
    const formattedValue = formatAmount(e.target.value);
    setAmount(formattedValue);

    const unformattedAmount = parseInt(formattedValue.replace(/\./g, ''), 10);
    if (unformattedAmount > MAX_AMOUNT) {
      setErrorMessage('Jumlah maksimum untuk transfer adalah Rp 10.000.000');
    } else if (unformattedAmount < MIN_AMOUNT) {
      setErrorMessage('Minimal transfer adalah Rp 10.000');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <Card>
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="flex items-center p-2">
          <button onClick={handleBack} className="mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">Kirim Uang</h1>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-white shadow-xl rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 text-gray-700">Mau kirim berapa?*</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">Rp</span>
                <input
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  className="p-3 pl-10 border rounded w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="0"
                  required
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-gray-700">Mau kirim ke mana?*</label>
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              >
                <option value="">Bank Tujuan</option>
                <option value="bca">BCA</option>
                <option value="bni">BNI</option>
                <option value="bri">BRI</option>
                <option value="mandiri">Mandiri</option>
                {/* Tambahkan opsi bank lain di sini */}
              </select>
            </div>

            <div className="mb-6">
              <div className="relative">
                <input
                  type="number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="p-3 border rounded w-full pr-16 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Nomor Rekening"
                  required
                />
                <button
                  type="button"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sky-500 font-semibold"
                >
                  Cek
                </button>
              </div>
            </div>

            {/* <div className="flex justify-between items-center mb-6">
              <p className="text-gray-700">Total Bayar</p>
              <p className="text-gray-700">-</p>
            </div> */}

            <button
              type="submit"
              className="w-full bg-sky-500 text-white py-3 rounded hover:bg-sky-600 transition duration-300"
            >
              Lanjut Verifikasi
            </button>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default KirimUang;
