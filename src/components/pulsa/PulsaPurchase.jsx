import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PulsaForm from './PulsaForm';
import PulsaOptions from './PulsaOptions';
import PaymentConfirmation from './PaymentConfirmation';
import PaymentMethodSelection from './PaymentMethodSelection';
import Card from '../Card';

const PulsaPurchase = ({ onBack }) => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [step, setStep] = useState('form');
  const [warning, setWarning] = useState('');

  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number);
    setSelectedAmount(null);
    setWarning('');
  };

  const handleSelectAmount = (amount, total) => {
    if (!phoneNumber || phoneNumber.length < 1) {
      setWarning('Masukan Nomor HP Anda');
      return;
    }
    setSelectedAmount({ amount, total });
    setWarning('');
  };

  const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
    setStep('confirmation');
  };

  const handleConfirmPayment = () => {
    navigate('/process-payment', {
      state: {
        selectedMethod: selectedPaymentMethod,
        amount: selectedAmount.total,
        accountNumber: phoneNumber,
      },
    });
  };

  const handleBack = () => {
    if (step === 'paymentMethod') {
      setStep('form');
    } else if (step === 'confirmation') {
      setStep('paymentMethod');
    } else {
      navigate('/');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 'form':
        return (
          <>
            <PulsaForm onPhoneNumberChange={handlePhoneNumberChange} warning={warning} />
            <PulsaOptions 
              onSelect={handleSelectAmount} 
              selectedAmount={selectedAmount} 
            />
          </>
        );
      case 'paymentMethod':
        return (
          <PaymentMethodSelection onSelect={handleSelectPaymentMethod} />
        );
      case 'confirmation':
        return (
          <PaymentConfirmation
            packageName={`Pulsa ${selectedAmount?.amount}`}
            phoneNumber={phoneNumber}
            amount={selectedAmount?.total}
            paymentMethod={selectedPaymentMethod}
            onConfirm={handleConfirmPayment}
            onCancel={() => setStep('paymentMethod')}
          />
        );
      default:
        return null;
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
          <h1 className="text-lg font-semibold">Pulsa</h1>
        </div>
      </div>
      <div className="max-w-md mx-auto m-10 ">
        {renderStep()}
        {step === 'form' && (
          <div className="sticky bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t">
            <div className="flex justify-between m-2">
              <div>
                <div className="text-sm text-gray-500">Total Harga</div>
                <div className="font-bold text-lg">
                  Rp{selectedAmount ? selectedAmount.total.toLocaleString() : '0'}
                </div>
              </div>
              <button 
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setStep('paymentMethod')}
                disabled={!selectedAmount}
              >
                Pilih Pembayaran
              </button> 
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default PulsaPurchase;