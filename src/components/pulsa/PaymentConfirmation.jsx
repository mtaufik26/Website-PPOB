import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card';

const PaymentConfirmation = ({ packageName, phoneNumber, amount, paymentMethod, onConfirm, onCancel }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/process-payment', {
      state: {
        selectedMethod: paymentMethod,
        amount: amount,
        accountNumber: phoneNumber, // Assuming this is the account number
      },
    });
  };

  return (
    <div className='max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg'>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Konfirmasi Pembelian</h2>
      <div className="bg-gray-50 p-5 rounded-lg mb-6 shadow-sm">
        <InfoItem label="Nama paket" value={packageName} />
        <InfoItem label="Nomor HP" value={phoneNumber} />
        <InfoItem label="Harga" value={`Rp ${amount.toLocaleString()}`} />
        <InfoItem label="Metode pembayaran" value={paymentMethod} isLast />
      </div>
      <div className="mb-6 flex justify-between items-center py-3 border-t border-b border-gray-200">
        <span className="text-lg font-medium">Total Harga</span>
        <span className="text-xl font-bold text-red-600">Rp {amount.toLocaleString()}</span>
      </div>
      <button
        onClick={handlePayment} // Navigate to ProcessPayment page
        className="w-full bg-sky-500 text-white py-3 rounded-lg mb-3 font-semibold hover:bg-sky-600 transition duration-300 ease-in-out shadow-md"
      >
        BAYAR
      </button>
      <button
        onClick={onCancel}
        className="w-full text-sky-500 py-2 font-medium hover:text-sky-600 transition duration-300 ease-in-out"
      >
        Kembali
      </button>
    </div>
  );
};

const InfoItem = ({ label, value, isLast = false }) => (
  <div className={`flex justify-between ${isLast ? '' : 'mb-3'}`}>
    <span className="text-gray-600 font-semibold">{label}:</span>
    <span className="font-medium text-gray-800">{value}</span>
  </div>
);

export default PaymentConfirmation;
