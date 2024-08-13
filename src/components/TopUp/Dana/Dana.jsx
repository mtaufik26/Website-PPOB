import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '../../Card';

// Component for selecting a nominal value and phone number
const Dana = () => {
  const navigate = useNavigate();
  const [nominal, setNominal] = useState('Rp 10.000');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [total, setTotal] = useState(0);
  const [isValid, setIsValid] = useState(false);

  // Handler for navigating back to the homepage
  const handleBack = () => {
    navigate('/');
  };

  // Function to validate phone number and calculate total price
  const handleCheck = () => {
    if (phone.length >= 12) {
      setErrorMessage('');
      setIsValid(true);
      const nominalValue = Number(
        nominal.replace('Rp ', '').replace(/\./g, '').replace(',', '')
      );
      setTotal(nominalValue);
    } else {
      setErrorMessage('Nomor terlalu singkat | minimal 12 karakter.');
      setIsValid(false);
      setTotal(0);
    }
  };

  // Function to navigate to the payment page if validation passes
  const handlePilihPembayaran = () => {
    if (isValid) {
      navigate('/payment-page', {
        state: { total, phone, nominal }, // Pass the required data
      });
    }
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
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Rp 10.000</option>
            <option>Rp 20.000</option>
            <option>Rp 50.000</option>
            <option>Rp 100.000</option>
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

        <div className="mt-6 border-t pt-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-bold">Total Harga</span>
            <span className="text-gray-700 font-bold">
              Rp {total.toLocaleString('id-ID')}
            </span>
          </div>
          <button
            onClick={handlePilihPembayaran}
            className={`mt-4 ${
              isValid ? 'bg-blue-500' : 'bg-gray-300'
            } text-white py-2 px-4 rounded w-full`}
            disabled={!isValid}
          >
            Pilih Pembayaran
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Dana;