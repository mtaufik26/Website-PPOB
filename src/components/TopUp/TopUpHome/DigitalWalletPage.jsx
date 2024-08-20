import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../Card';

const DigitalWalletPage = ({ walletName, options }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for showing modal

  const handleBack = () => {
    navigate('/');
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const filteredInput = input.replace(/[^0-9]/g, '');

    setPhone(filteredInput);

    if (filteredInput.length === 0) {
      setErrorMessage('');
      setIsValid(false);
      return;
    }

    if (!filteredInput.startsWith('08')) {
      setErrorMessage('Nomor harus dimulai dengan 08');
      setIsValid(false);
    } else if (filteredInput.length < 10) {
      setErrorMessage('Nomor terlalu singkat | minimal 10 karakter.');
      setIsValid(false);
    } else {
      setErrorMessage('');
      setIsValid(true);
    }
  };

  const handleCheck = () => {
    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        const isSuccess = true;
        if (isSuccess) {
          setChecked(true);
          setPurchaseDetails({
            phone,
            amount: selectedOption.amount,
            admin: selectedOption.admin,
          });
        } else {
          setErrorMessage('Gagal memproses top-up, coba lagi nanti.');
        }
        setLoading(false);
      }, 2000);
    }
  };

  const handlePilihPembayaran = () => {
    if (isValid && checked) {
      setShowModal(true); // Show confirmation modal
    }
  };

  const handleConfirmPayment = () => {
    setShowModal(false); // Close modal
    navigate('/payment-page', {
      state: { 
        total: selectedOption.amount + selectedOption.admin, 
        phone, 
        nominal: selectedOption.amount,
        adminFee: selectedOption.admin,
        walletName, // Pass walletName to PaymentPage
      },
    });
  };
  

  const handleCancelPayment = () => {
    setShowModal(false); // Close modal without proceeding
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
          <h1 className="text-lg font-semibold">Dompet Digital - {walletName}</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Pilih Nominal Anda
        </label>
        <div className="relative mb-4">
          <select
            value={selectedOption.amount}
            onChange={(e) => setSelectedOption(options.find(option => option.amount === parseInt(e.target.value)))}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            {options.map((option) => (
              <option key={option.amount} value={option.amount}>
                Rp {option.amount.toLocaleString('id-ID')}
              </option>
            ))}
          </select>
        </div>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          No. Telepon
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="08xxxxxxxxxxx"
            value={phone}
            onChange={handlePhoneChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={handleCheck}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-sky-500 px-4 py-1 rounded-lg ${!isValid ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={!isValid || loading}
          >
            {loading ? 'Memproses...' : 'Cek'}
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">
            {errorMessage}
          </p>
        )}

        {checked && purchaseDetails && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Top-up {walletName}</h2>
            <div className="text-gray-700">
              <p className="flex justify-between">
                <span className="font-semibold">Nomor HP:</span>
                <span>{purchaseDetails.phone}</span>
              </p>
              <p className="flex justify-between ">
                <span className="font-semibold">Nominal Top-up:</span>
                <span>Rp {purchaseDetails.amount.toLocaleString('id-ID')}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Nama:</span>
                <span>{purchaseDetails.phone.slice(0, 2)}********************{purchaseDetails.phone.slice(-1)}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Biaya Admin:</span>
                <span>Rp {purchaseDetails.admin.toLocaleString('id-ID')}</span>
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 border-t pt-4 flex items-center justify-between">
          <div>
            <span className="text-gray-700 font-bold">Total Bayar</span>
            <p className="text-gray-700 font-bold">
              {checked ? `Rp ${(selectedOption.amount + selectedOption.admin).toLocaleString('id-ID')}` : '-'}
            </p>
          </div>
          <button
            onClick={handlePilihPembayaran}
            className={`${checked ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-500'} py-2 px-4 rounded-lg `}
            disabled={!checked}
          >
            Lanjut Verifikasi
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Konfirmasi Pembayaran</h2>
            <p className="mb-2">
              <strong>Nominal Top-up:</strong> Rp {selectedOption.amount.toLocaleString('id-ID')}
            </p>
            <p className="mb-2">
              <strong>Biaya Admin:</strong> Rp {selectedOption.admin.toLocaleString('id-ID')}
            </p>
            <p className="mb-4">
              <strong>Total Pembayaran:</strong> Rp {(selectedOption.amount + selectedOption.admin).toLocaleString('id-ID')}
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleCancelPayment}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmPayment}
                className="px-4 py-2 bg-sky-500 text-white rounded-lg"
              >
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default DigitalWalletPage;
