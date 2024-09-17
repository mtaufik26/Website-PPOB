import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // Icon loading
import { MdCheckCircle, MdError } from 'react-icons/md'; // Icon check dan error

const DigitalWalletPage = ({ walletName, options = [] }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState({});
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputTouched, setInputTouched] = useState(false); // New state to check if input has been touched

  const handleBack = () => navigate('/');

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, '');
    setPhone(input);
    setInputTouched(true); // Set input as touched when changed

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
    <div className='max-w-md mx-auto p-2 flex flex-col h-screen justify-between'>
      <div className="flex-grow">
        <header className="sticky top-0 bg-white z-10 border-b">
          <div className="flex items-center p-2">
            <button onClick={handleBack} className="mr-4" aria-label="Go back">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold">Dompet Digital - {walletName}</h1>
          </div>
        </header>
        <div className="max-w-lg mx-auto p-4">
          <h1 className="text-2xl font-bold mb-3">TopUp {walletName}</h1>
          <label className="block text-gray-700 text-sm font-bold mb-1">No. Telepon</label>
          <div className="relative mb-1">
            <input
              type="text"
              placeholder="08xxxxxxxxxxx"
              value={phone}
              onChange={handlePhoneChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                inputTouched && !isValid ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <button
              onClick={handleCheck}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-sky-500 px-4 py-1 rounded-lg transition duration-150 ${
                !isValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-100'
              }`}
              disabled={!isValid || loading}
            >
              {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : 'Cek'}
            </button>
          </div>
          {inputTouched && errorMessage && (
            <p className="text-red-500 text-sm mt-0.5 flex items-center">
              <MdError className="mr-1" /> {errorMessage}
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
                <p className="flex justify-between">
                  <span className="font-semibold">Nominal Top-up:</span>
                  <span>Rp {purchaseDetails.amount?.toLocaleString('id-ID') || '0'}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Nama:</span>
                  <span>{purchaseDetails.phone.slice(0, 2)}********************{purchaseDetails.phone.slice(-1)}</span>
                </p>
              </div>
            </div>
          )}
          <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Pilih Nominal Anda</label>
          <div className="relative mb-4 grid grid-cols-2 gap-4">
            {options.map((option) => (
              <button
                key={option.amount}
                onClick={() => setSelectedOption(option)}
                className={`p-2 rounded-lg flex items-center justify-center transition-all duration-200 text-lg font-semibold shadow ${
                  selectedOption.amount === option.amount ? 'bg-blue-100 border-blue-500 shadow-lg'
                : 'bg-white border border-gray-200 hover:shadow-md'
                }`}
              >
                Rp {option.amount?.toLocaleString('id-ID') || '0'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white shadow-md p-4 border-t">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-700 font-bold">Total Bayar</span>
            <p className="text-gray-700 font-bold">
              {checked ? `Rp ${(selectedOption?.amount || 0).toLocaleString('id-ID')}` : 'Rp 0'}
            </p>
          </div>
          <button
            onClick={handleConfirmPayment}
            className={`py-2 px-4 rounded-lg transition duration-150 ${
              checked ? 'bg-sky-500 text-white hover:bg-sky-600' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
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
