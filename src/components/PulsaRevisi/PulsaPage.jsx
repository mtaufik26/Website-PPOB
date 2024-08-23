import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProviderDropdown from './ProviderDropdown';
import DenominationButtons from './DenominationButtons';
import PhoneNumberInput from './PoneNumberInput';
import Summary from './Summary';
import Card from '../Card';

const PulsaPage = () => {
    const navigate = useNavigate();
    const [provider, setProvider] = useState('');
    const [denomination, setDenomination] = useState({ amount: null, code: '' });
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const handleProviderChange = (selectedProvider) => {
      setProvider(selectedProvider);
      setDenomination({ amount: null, code: '' }); // Reset denomination when provider changes
    };
  
    const handleDenominationSelect = (amount, code) => {
      setDenomination({ amount, code });
    };
  
    const handlePhoneNumberChange = (number) => {
      setPhoneNumber(number);
    };

    const handleBack = () => navigate('/');
  
    return (
        <Card>
            <div className="sticky top-0 bg-white z-10 border-b">
                <div className="flex items-center p-2">
                    <button onClick={handleBack} className="mr-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                <h1 className="text-lg font-semibold">Pulsa</h1>
                </div>
            </div>
            <div className="max-w-lg mx-auto p-4 ">
                <h1 className="text-2xl font-bold mb-4 text-center text-sky-600">Top-Up Pulsa</h1>
                
                <ProviderDropdown onChange={handleProviderChange} provider={provider} />
                <PhoneNumberInput value={phoneNumber} onChange={handlePhoneNumberChange} />
                <DenominationButtons provider={provider} onSelect={handleDenominationSelect} selected={denomination} />
                <Summary provider={provider} denomination={denomination.amount} phoneNumber={phoneNumber} />
                
                <button
                    className={`w-full mt-4 py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
                    provider && denomination.amount && phoneNumber.length >= 10
                        ? 'bg-sky-500 hover:bg-sky-600 shadow-lg'
                        : 'bg-gray-400 '
                    }`}
                    disabled={!provider || !denomination.amount || phoneNumber.length < 10}
                >
                    Lanjut Verifikasi
                </button>
            </div>
        </Card>
    );
};  

export default PulsaPage;
