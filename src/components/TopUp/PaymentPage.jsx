import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '../Card'; 

const paymentMethods = [
  // Same as before
];

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const { total, phone, nominal, walletName } = location.state || {};

  useEffect(() => {
    if (!total || !phone || !nominal) {
      navigate('/', { replace: true });
    }
  }, [total, phone, nominal, navigate]);

  const handleSelection = (methodId) => {
    setSelectedMethod(methodId);
    setError('');
  };

  const handleContinue = () => {
    if (selectedMethod) {
      setError('');
      navigate('/confirmation', {
        state: {
          selectedMethod,
          total,
          phone,
          nominal,
        },
      });
    } else {
      setError('Silakan pilih metode pembayaran');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Card className="max-w-md mx-auto p-6">
      {/* Rest of the component remains the same */}
    </Card>
  );
};

export default PaymentPage;
