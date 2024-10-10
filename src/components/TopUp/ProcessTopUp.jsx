import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '../Card';
import Ceklis from '../../assets/images/ceklis.png';

const PaymentProcess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    selectedMethod,
    harga,
    phone,
    productCode,
    walletName,
    serviceType,
    productType,
    titles = {},
    messages = {},
  } = location.state || {};

  const [status, setStatus] = useState('verifikasi');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'verifikasi') {
        setStatus('proses');
        setProgress(33);
      } else if (status === 'proses') {
        setStatus('selesai');
        setProgress(100);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [status]);

  const handleClose = () => {
    navigate('/');
  };

  const formatHarga = (harga) => {
    return harga && harga > 0 ? `Rp ${parseInt(harga, 10).toLocaleString()}` : 'Rp -';
  };

  const renderContent = () => {
    switch (status) {
      case 'verifikasi':
        return (
          <>
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-sky-500 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{titles.verifikasi}</h2>
            {messages.verifikasi.map((message, index) => (
              <p key={index} className="text-gray-600 mb-2 font-semibold">{message}</p>
            ))}
          </>
        );
      case 'proses':
        return (
          <>
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-sky-500 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{titles.proses}</h2>
            <p className="text-gray-600 font-semibold">{messages.proses}</p>
          </>
        );
      case 'selesai':
        return (
          <>
            <img src={Ceklis} alt="Ceklis" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{titles.selesai}</h2>
            {messages.selesai.map((message, index) => (
              <p key={index} className="text-gray-600 mb-2 font-semibold">{message}</p>
            ))}
              <p className="font-bold p-5 text-lg">Total Pembayaran: {formatHarga(harga)}</p>
            <button
              className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-6 rounded-lg font-semibold transition duration-300"
              onClick={handleClose}
            >
              Kembali ke Beranda
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-6 text-center">
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-sky-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          {renderContent()}
        </div>
      </div>
    </Card>
  );
};

export default PaymentProcess;
