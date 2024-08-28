import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OperatorSelector from './OperatorSelector';
import MeterIdInput from './PLNMeterIdInput';
import PurchaseDetails from './PLNDetails';
import NominalButtons from './PLNNominal';
import TotalPrice from './TotalPrice';

const ElectricityForm = () => {
  const [selectedOperator, setSelectedOperator] = useState('Token Listrik');
  const [selectedNominal, setSelectedNominal] = useState(null);
  const [meteranId, setMeteranId] = useState('');
  const [meteranIdError, setMeteranIdError] = useState('');
  const [notification, setNotification] = useState('');
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [nominalNotSelectedError, setNominalNotSelectedError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckButtonClicked, setIsCheckButtonClicked] = useState(false);
  const navigate = useNavigate();

  const operators = ['Token Listrik', 'Tagihan Listrik', 'PLN Non-Taglis'];
  const nominals = [
    { value: 20000, admin: 500 },
    { value: 50000, admin: 500 },
    { value: 100000, admin: 500 },
    { value: 200000, admin: 500 },
    { value: 500000, admin: 500 },
    { value: 1000000, admin: 500 },
  ];

  useEffect(() => {
    if (selectedOperator === 'Tagihan Listrik') {
      navigate('/tagihan-listrik');
    }
  }, [selectedOperator, navigate]);

  const handleMeteranIdChange = (value) => {
    setMeteranId(value);
    setNotification('');
    setPurchaseDetails(null);
    setNominalNotSelectedError('');
    setIsCheckButtonClicked(false);

    if (value.length < 11 && value.length > 0) {
      setMeteranIdError('Nomor terlalu pendek | minimal 11 karakter');
    } else if (value.length > 12) {
      setMeteranIdError('Nomor terlalu panjang | maksimum 12 karakter');
    } else {
      setMeteranIdError('');
    }
  };

  const handleCheckMeteranId = () => {
    if (meteranId.length >= 11 && meteranId.length <= 12) {
      setIsLoading(true);

      setTimeout(() => {
        if (!selectedNominal) {
          setNominalNotSelectedError('Pilih nominal sebelum melanjutkan.');
        } else {
          setNotification('Nomor valid! Anda bisa melanjutkan.');
          setPurchaseDetails({
            amount: selectedNominal,
            id: meteranId,
            name: '',
            rate: '',
          });
          setNominalNotSelectedError('');
          setIsCheckButtonClicked(true);
        }
        setIsLoading(false);
      }, 2000);
    } else {
      setNotification('Nomor tidak valid! Periksa kembali nomor yang Anda masukkan.');
      setPurchaseDetails(null);
      setIsCheckButtonClicked(false);
    }
  };

  const handlePaymentSelection = () => {
    if (meteranId.length >= 11 && selectedNominal && isCheckButtonClicked) {
      const fee = getAdminFee();
      navigate('/payment-selection', {
        state: {
          selectedNominal,
          meteranId,
          adminFee: fee,
          productType: 'electricity',
        },
      });
    } else {
      if (!selectedNominal) {
        setNominalNotSelectedError('Pilih nominal sebelum melanjutkan.');
      }
      if (meteranId.length < 11) {
        setMeteranIdError('Nomor harus minimal 11 digit untuk melanjutkan.');
      }
    }
  };

  const getAdminFee = () => {
    const selectedNominalObj = nominals.find((nominal) => nominal.value === selectedNominal);
    return selectedNominalObj ? selectedNominalObj.admin : 0;
  };

  return (
    <div className="max-w-md mx-auto p-2 flex flex-col h-screen justify-between">
      <div className="flex-grow">
        <div className="sticky top-0 bg-white z-10 border-b">
          <div className="flex items-center p-2">
            <button onClick={() => navigate('/')} className="mr-4" aria-label="Back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold">Listrik PLN</h1>
          </div>
        </div>
        <div className="max-w-lg mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Listrik PLN</h1>
          <OperatorSelector
            operators={operators}
            selectedOperator={selectedOperator}
            setSelectedOperator={setSelectedOperator}
          />
          <MeterIdInput
            meteranId={meteranId}
            handleMeteranIdChange={handleMeteranIdChange}
            meteranIdError={meteranIdError}
            handleCheckMeteranId={handleCheckMeteranId}
            selectedNominal={selectedNominal}
            isLoading={isLoading}
            notification={notification}
            nominalNotSelectedError={nominalNotSelectedError}
          />
          {purchaseDetails && <PurchaseDetails purchaseDetails={purchaseDetails} />}
          <NominalButtons
            nominals={nominals}
            selectedNominal={selectedNominal}
            setSelectedNominal={setSelectedNominal}
            meteranId={meteranId}
            setMeteranIdError={setMeteranIdError}
          />
        </div>
      </div>
      <TotalPrice
        selectedNominal={selectedNominal}
        getAdminFee={getAdminFee}
        handlePaymentSelection={handlePaymentSelection}
        isDisabled={!selectedNominal || meteranIdError || meteranId.length < 11 || !isCheckButtonClicked}
      />
    </div>
  );
};

export default ElectricityForm;