import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Ceklis from '../../../assets/images/ceklis.png';
import Card from '../../Card';

const Process = () => {
  const [status, setStatus] = useState('verifikasi');
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { amount, selectedMethod, phone, productType } = location.state || {};

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

  const handleDone = () => {
    navigate('/');
  };

  const renderContent = () => {
    switch (status) {
      case 'verifikasi':
        return (
          <>
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-sky-500 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Verifikasi Pengiriman</h2>
            <p className="text-gray-600 mb-2">Jumlah: Rp {amount.toLocaleString()}</p>
            <p className="text-gray-600 mb-4">Nomor HP: {phone}</p>
            <p className="text-gray-600">Mohon tunggu, kami sedang memverifikasi transaksi Anda...</p>
          </>
        );
      case 'proses':
        return (
          <>
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-sky-500 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Proses Pengiriman</h2>
            <p className="text-gray-600">Transaksi Anda sedang diproses...</p>
          </>
        );
      case 'selesai':
        return (
          <>
            <img src={Ceklis} alt="Ceklis" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Pengiriman Selesai</h2>
            <p className="text-gray-600 mb-2">Transaksi Anda telah berhasil!</p>
            <button
              className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-6 rounded-lg font-semibold transition duration-300"
              onClick={handleDone}
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
    <Card className="max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
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
    </Card>
  );
};

export default Process;
