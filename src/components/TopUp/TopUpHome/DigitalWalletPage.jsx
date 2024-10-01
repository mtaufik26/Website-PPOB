import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdError } from 'react-icons/md';
import classNames from 'classnames'; // Assuming you have 'classnames' package

const DigitalWalletPage = ({ walletName, options = [] }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState({});
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);

  const handleBack = () => navigate('/');

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, '');
    setPhone(input);
    setInputTouched(true);

    if (input.length === 0) {
      setErrorMessage('');
      setIsValid(false);
    } else if (!input.startsWith('08')) {
      setErrorMessage('Nomor harus dimulai dengan 08');
      setIsValid(false);
    } else if (input.length < 10) {
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
            amount: selectedOption?.amount || 0,
            productCode: selectedOption?.productCode || '',
          });
        } else {
          setErrorMessage('Gagal memproses top-up, coba lagi nanti.');
        }
        setLoading(false);
      }, 2000);
    }
  };

  const handleConfirmPayment = () => {
    navigate('/payment-page', {
      state: {
        serviceType: 'ewallet',
        total: selectedOption?.amount || 0,
        phone,
        nominal: selectedOption?.amount || 0,
        productCode: selectedOption?.productCode || '',
        walletName,
        productType: 'wallet',
      },
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 flex flex-col h-screen justify-between bg-white">
      <div className="flex-grow">
        <header className="sticky top-0 bg-white z-10 border-b">
          <div className="flex items-center p-2">
            <button onClick={handleBack} className="mr-4" aria-label="Go back">
              <svg
                className="w-6 h-6 transition duration-150"
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
        </header>

        <div className="max-w-lg mx-auto p-4 mt-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">TopUp {walletName}</h1>

          <label className="block text-gray-700 text-sm font-bold mb-2">No. Telepon</label>
          <div className="relative mb-2">
            <input
              type="number"
              placeholder="08xxxxxxxxxxx"
              value={phone}
              onChange={handlePhoneChange}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-1 ${
                inputTouched && !isValid ? 'focus:ring-red-500 border-red-500' : 'focus:ring-sky-500 border-gray-300'
              }`}
            />
            <button
              onClick={handleCheck}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-sky-400 px-4 py-1 rounded-lg transition duration-150 ${
                !isValid ? 'opacity-50 cursor-not-allowed' : 'hover:text-sky-500'
              }`}
              disabled={!isValid || loading}
            >
              {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : 'Cek'}
            </button>
          </div>
          {inputTouched && errorMessage && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <MdError className="mr-1" /> {errorMessage}
            </p>
          )}

          {checked && purchaseDetails && (
            <div className="mt-6 p-4 border rounded-lg shadow-md bg-gray-50">
              <h2 className="text-lg font-semibold text-sky-600 mb-4">Detail Top-up</h2>
              <div className="text-gray-700">
                <p className="flex justify-between">
                  <span className="font-semibold">Nomor HP:</span>
                  <span>{purchaseDetails.phone}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Nominal Top-up:</span>
                  <span>Rp {purchaseDetails.amount?.toLocaleString('id-ID') || '0'}</span>
                </p>
              </div>
            </div>
          )}

          <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Pilih Nominal Anda</label>
          <div className="grid grid-cols-2 gap-4">
            {options.map((option) => (
              <button
                key={option.amount}
                onClick={() => setSelectedOption(option)}
                className={classNames(
                  'p-2 rounded-lg flex items-center justify-center transition-all text-lg font-semibold',
                  selectedOption.amount === option.amount
                    ? 'bg-blue-100 border-blue-500 transform scale-105 shadow-lg'
                    : 'bg-white border border-gray-200 hover:shadow-md'
                )}
                aria-pressed={selectedOption.amount === option.amount}
              >
                <span>Rp {option.amount?.toLocaleString('id-ID') || '0'}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 shadow-md p-4 border-t bg-white">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-700 font-bold">Total Bayar</span>
            <p className="text-gray-700 font-bold">
              {checked ? `Rp ${(selectedOption?.amount || 0).toLocaleString('id-ID')}` : 'Rp 0'}
            </p>
          </div>
          <button
            onClick={handleConfirmPayment}
            className={`py-2 px-4 rounded-lg transition duration-150 border ${
              checked
                ? 'border-sky-500 bg-sky-500 text-white hover:bg-sky-600 hover:scale-105'
                : 'border-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!checked}
          >
            Lanjut Verifikasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalWalletPage;
