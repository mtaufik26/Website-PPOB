//PaymentConfirmation.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentConfirmation = ({ packageName, phoneNumber, amount, paymentMethod, onCancel }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/process-payment', {
      state: {
        selectedMethod: paymentMethod,
        amount: amount,
        accountNumber: phoneNumber,
      },
    });
  };

  return (
    <div className='max-w-lg mx-auto mt-6 sm:mt-8'>
      <div className='bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Konfirmasi Pembelian</h2>
        <div className='space-y-4'>
          <DetailItem label="Nama Paket" value={packageName} />
          <DetailItem label="Nomor HP" value={phoneNumber} />
          <DetailItem label="Harga" value={`Rp ${amount.toLocaleString()}`} />
          <DetailItem label="Metode Pembayaran" value={paymentMethod} />
        </div>
        <div className='flex items-center justify-between border-t border-gray-300 pt-4 mt-4'>
          <span className='text-lg font-semibold text-gray-900'>Total Harga</span>
          <span className='text-xl font-bold text-red-600'>Rp {amount.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        className='w-full bg-sky-500 text-white py-3 rounded-lg mb-3 font-semibold hover:bg-sky-600 transition duration-300 ease-in-out shadow-md'
      >
        BAYAR
      </button>
      <button
        onClick={onCancel}
        className='w-full bg-gray-200 text-sky-500 py-2 rounded-lg font-medium hover:bg-gray-300 transition duration-300 ease-in-out'
      >
        Kembali
      </button>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className='flex items-center justify-between'>
    <span className='text-base font-medium text-gray-600'>{label}</span>
    <span className='text-base font-medium text-gray-900'>{value}</span>
  </div>
);

export default PaymentConfirmation;
