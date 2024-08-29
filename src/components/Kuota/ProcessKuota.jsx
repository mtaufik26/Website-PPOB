import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '../Card';
import Ceklis from '../../assets/images/ceklis.png';

const ProcessKuota = () => {
  const [status, setStatus] = useState('verifikasi');
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Destructuring data from location.state
  const { selectedMethod, harga, phoneNumber, provider } = location.state || {};

  console.log('Phone Number:', phoneNumber);
    console.log('Harga:', harga);

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

  const formatAmount = (amount) => {
    return amount && amount > 0 ? `Rp ${parseInt(amount, 10).toLocaleString()}` : 'Rp -';
  };

  const renderContent = () => {
    switch (status) {
      case 'verifikasi':
        return (
          <>
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-sky-500 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Verifikasi Pembayaran</h2>
            <p className="text-gray-600 mb-2">Provider : {provider || '-'}</p>
            <p className="text-gray-600 mb-2">Nomor HP : {phoneNumber || '-'}</p>
            <p className="text-gray-600 mb-2">Harga : {formatAmount(harga)}</p>
            <p className="text-gray-600 mb-2">Metode : {selectedMethod || '-'}</p>
            <p className="text-gray-600">Mohon tunggu, kami sedang memverifikasi transaksi Anda...</p>
          </>
        );
      case 'proses':
        return (
          <>
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-sky-500 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Memproses Pembayaran</h2>
            <p className="text-gray-600">Transaksi Anda sedang diproses...</p>
          </>
        );
      case 'selesai':
        return (
          <>
            <img src={Ceklis} alt="Ceklis" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Pembayaran Berhasil</h2>
            <p className="text-gray-600 mb-1">Nomor HP : {phoneNumber || '-'}</p>
            <p className="text-gray-600 mb-1">Harga : {formatAmount(harga)}</p>
            <p className="text-gray-600 mb-2">Terima kasih atas pembayaran Anda dengan metode {selectedMethod}.</p>
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

export default ProcessKuota;
