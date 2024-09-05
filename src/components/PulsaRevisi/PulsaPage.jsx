import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ProviderSelector from './PulsaProvider';
import PhoneNumberInput from './PulsaInputNumber';
import DenominationButtons from './PulsaNominal';
import TotalPrice from './PulsaTotal';
import { denominations } from './PulsaDenominations';

const PulsaPage = () => {
  const navigate = useNavigate();
  const [provider, setProvider] = useState('');
  const [denomination, setDenomination] = useState({ harga: null, productCode: '' });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleProviderChange = (selectedProvider) => {
    setProvider(selectedProvider);
    setDenomination({ harga: null, productCode: '' });
  };

  const handleDenominationSelect = (harga, productCode) => {
    setDenomination({ harga, productCode });
  };

  const handlePhoneNumberChange = (number) => {
    const input = number.replace(/[^0-9]/g, '');
    setPhoneNumber(input);

    if (input && !input.startsWith('08')) {
      setError('Nomor HP harus dimulai dengan "08".');
    } else if (input.length < 10) {
      setError('Nomor HP terlalu pendek.');
    } else if (input.length > 20) {
      setError('Nomor HP terlalu panjang.');
    } else {
      setError('');
    }
  };

  const handleBack = () => navigate('/');

  const handleVerification = () => {
    if (isProviderSelected && isDenominationSelected && isPhoneNumberValid) {
      navigate(`/metode-payment/pulsa`, {
        state: {
          type: 'pulsa',
          provider,
          phoneNumber,
          harga: denomination.harga,
          productCode: denomination.productCode
        },
      });
    }
  };

  const isPhoneNumberValid = phoneNumber.length >= 10 && !error;
  const isProviderSelected = provider !== '';
  const isDenominationSelected = denomination.harga !== null;

  const availableDenominations = useMemo(() => denominations[provider] || [], [provider]);

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
            <h1 className="text-lg font-semibold">Pulsa</h1>
          </div>
        </div>
        <div className="max-w-lg mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Top-Up Pulsa</h1>
          <ProviderSelector
            provider={provider}
            handleProviderChange={handleProviderChange}
            denominations={denominations}
          />
          <PhoneNumberInput
            phoneNumber={phoneNumber}
            handlePhoneNumberChange={handlePhoneNumberChange}
            error={error}
          />
          {provider && (
            <DenominationButtons
              availableDenominations={availableDenominations}
              handleDenominationSelect={handleDenominationSelect}
              denomination={denomination}
            />
          )}
        </div>
      </div>
      <TotalPrice
        denomination={denomination}
        isProviderSelected={isProviderSelected}
        isDenominationSelected={isDenominationSelected}
        isPhoneNumberValid={isPhoneNumberValid}
        handleVerification={handleVerification}
      />
    </div>
  );
};

export default PulsaPage;
