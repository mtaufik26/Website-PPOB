import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../Card';

const DigitalWalletPage = ({ walletName, options = [] }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(options[0] || {});
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBack = () => navigate('/');

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, '');
    setPhone(input);

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
            admin: selectedOption?.admin || 0,
          });
        } else {
          setErrorMessage('Gagal memproses top-up, coba lagi nanti.');
        }
        setLoading(false);
      }, 2000);
    }
  };


  const handleConfirmPayment = () => {
    navigate('/topup-confirmation', {
      state: {
        serviceType: 'ewallet',
        total: (selectedOption?.amount || 0) + (selectedOption?.admin || 0),
        phone,
        nominal: selectedOption?.amount || 0,
        adminFee: selectedOption?.admin || 0,
        walletName,
        productType: 'wallet',
      },
    });
  };

  return (
    <div className='max-w-md mx-auto p-2  flex-col h-screen justify-between'>
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

      <section className="max-w-md mx-auto p-4 flex flex-col h-screen justify-between">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pilih Nominal Anda
          </label>
          <div className="relative mb-4">
            <select
              value={selectedOption?.amount || ''}
              onChange={(e) => setSelectedOption(options.find(option => option.amount === parseInt(e.target.value)))}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              {options.map((option) => (
                <option key={option.amount} value={option.amount}>
                  Rp {option.amount?.toLocaleString('id-ID') || '0'}
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
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-sky-500 px-4 py-1 rounded-lg ${!isValid ? ' opacity-50' : ''}`}
              disabled={!isValid || loading}
            >
              {loading ? 'Memproses...' : 'Cek'}
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
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
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-white shadow-md p-4 border-t">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-700 font-bold">Total Bayar</span>
              <p className="text-gray-700 font-bold">
                {checked ? `Rp ${((selectedOption?.amount || 0) + (selectedOption?.admin || 0)).toLocaleString('id-ID')}` : 'Rp 0'}
              </p>
            </div>
            <button
              onClick={handleConfirmPayment}
              className={`${checked ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-500'} py-2 px-4 rounded-lg`}
              disabled={!checked}
            >
              Lanjut Verifikasi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalWalletPage;
