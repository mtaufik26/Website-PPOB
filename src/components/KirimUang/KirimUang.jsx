import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card';

const KirimUang = () => {
  const [amount, setAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [recipientDetails, setRecipientDetails] = useState(null);
  const [adminFee, setAdminFee] = useState(2500);
  const [showSummary, setShowSummary] = useState(false);
  const [isCheckButtonPressed, setIsCheckButtonPressed] = useState(false);
  const navigate = useNavigate();
  const MAX_AMOUNT = 10000000;
  const MIN_AMOUNT = 10000;

  const handleSubmit = (e) => {
    e.preventDefault();
    const unformattedAmount = parseInt(amount.replace(/\./g, ''), 10);
    if (unformattedAmount > MAX_AMOUNT || unformattedAmount < MIN_AMOUNT) {
      setErrorMessage('Jumlah tidak valid.');
      return;
    }
    setErrorMessage('');
    navigate('/proses-pengiriman', {
      state: { amount, selectedBank, accountNumber, adminFee }, // Pass adminFee to the next page
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const formatAmount = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
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

  const handleCheck = () => {
    if (!amount || !selectedBank || !accountNumber) {
      setErrorMessage('Harap masukkan jumlah transfer, pilih bank tujuan, dan nomor rekening.');
      return;
    }

    setErrorMessage('');

    const details = {
      bank: selectedBank.toUpperCase(),
      accountNumber: accountNumber,
      name: 'Suhart***',
    };
    setRecipientDetails(details);

    setShowSummary(true);
    setIsCheckButtonPressed(true);
  };

  const calculateTotal = () => {
    const transferAmount = parseInt(amount.replace(/\./g, ''), 10);
    return transferAmount + adminFee;
  };

  const isFormValid = amount && selectedBank && accountNumber && isCheckButtonPressed;

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
        <div className="rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 text-gray-700">Mau kirim berapa?*</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">Rp</span>
                <input
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  className="shadow appearance-none border rounded w-full py-3 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="0"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-gray-700">Mau kirim ke mana?*</label>
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="p-3 border rounded w-full focus:outline-none"
                required
              >
                <option value="">Bank Tujuan</option>
                <option value="bca">BCA</option>
                <option value="bni">BNI</option>
                <option value="bri">BRI</option>
                <option value="mandiri">Mandiri</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-gray-700">No. Rekening</label>
              <div className="relative">
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                  required
                />
                <button
                  type="button"
                  onClick={handleCheck}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sky-500 font-semibold"
                >
                  Cek
                </button>
              </div>
            </div>

            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}

            {showSummary && recipientDetails && (
              <>
                <div className="mb-6">
                  <p><strong>Bank Tujuan: </strong>{recipientDetails.bank}</p>
                  <p><strong>No. Rekening: </strong>{recipientDetails.accountNumber}</p>
                  <p><strong>Nama: </strong>{recipientDetails.name}</p>
                </div>

                <hr className="border-t-2 border-gray-300 my-4" />

                <div className="mb-6">
                  <h2 className="font-semibold mb-2">Cek dulu ringkasannya, ya</h2>
                  <div className="flex justify-between text-gray-700">
                    <p>Jumlah Transfer</p>
                    <p>Rp{amount}</p>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <p>Biaya Admin</p>
                    <p>Rp{adminFee.toLocaleString()}</p>
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between items-center mt-4 border-t pt-4">
              <div>
                <h2 className="font-semibold text-gray-700">Total Bayar</h2>
                <p className="text-xl font-bold text-gray-800">
                  {isCheckButtonPressed ? `Rp${calculateTotal().toLocaleString()}` : '-'}
                </p>
              </div>
              <button
                type="submit"
                className={`py-3 px-6 rounded-lg transition duration-300 ${isFormValid ? 'bg-sky-500 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                disabled={!isFormValid}
              >
                Lanjut Verifikasi
              </button>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default KirimUang;
