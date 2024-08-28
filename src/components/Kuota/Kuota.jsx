import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Card from '../Card';

const Kuota = () => {
  const navigate = useNavigate();
  const [selectedProvider, setSelectedProvider] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const paketData = {
    'Axiata Axis': {
      packages: [
        {
          nama: 'BRONET 24Jam, 1GB, 7 hari',
          hargaBaru: '12.100',
          hargaLama: '12.490',
          diskon: '3',
          kode: 'sbiaxisdata1gb',
        },
        {
          nama: 'BRONET 24Jam, 2GB, 30 hari',
          hargaBaru: '22.530',
          hargaLama: '23.250',
          diskon: '3',
          kode: 'sbiaxisdata2gb',
        },
        {
          nama: '2GB Kuota Utama + 6GB 4G, 30 hari',
          hargaBaru: '1.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbiaxisdataOM8',
        },
        {
          nama: 'BRONET 24Jam, 5GB, 30 hari',
          hargaBaru: '1.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbiaxisdata5gb',
        },
        {
          nama: '3GB Kuota Utama + 9GB 4G, 30 hari',
          hargaBaru: '1.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbiaxisdataOM12',
        },
      ],
    },
    'Indosat': {
      packages: [
        {
          nama: 'KUOTA 1GB 30 hari',
          hargaBaru: '1.000',
          hargaLama: '10.000',
          diskon: '90',
          kode: 'sbiisatdata1gb',
        },
        {
          nama: 'KUOTA 2GB 30 hari',
          hargaBaru: '1.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbiisatdata2gb',
        },
        {
          nama: 'KUOTA 4GB 30 hari',
          hargaBaru: '1.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbiisatdata4gb',
        },
        {
          nama: 'Kuota 12GB berlaku selama 30 hari (24 jam)',
          hargaBaru: '1.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbiisatdata12gb',
        },
        {
          nama: 'KUOTA 5GB 30 hari',
          hargaBaru: '1.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbiisatdata5gb',
        },
      ],
    },
    'Smartfren': {

      packages: [
        {
          nama: 'Unlimited 4G 7D, Batas pemakaian 1GB/hari',
          hargaBaru: '20.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbismartdataSUNL20RB',
        },
        {
          nama: 'Unlimited FUP 700MB/Hari, Masa Aktif 28 Hari',
          hargaBaru: '60.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbismartdataSUNL60RB',
        },
        {
          nama: 'Unlimited 1.5GB + 1.5GB/Day FUP, Masa aktif 28 hari',
          hargaBaru: '80.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbismartdataSUNL80RB',
        },
        {
          nama: 'Super 4G Unlimited. Unlimited 2GB/Hari, Masa Aktif 28 Hari',
          hargaBaru: '200.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbismartdataSUNL200RB',
        },
        {
          nama: 'Unlimited 1GB + 1GB/Day FUP, Masa Aktif 28 hari',
          hargaBaru: '100.000',
          hargaLama: '',
          diskon: '',
          kode: 'sbismartdataSUNL100RB',
        },
      ],
    },
    'Telkomsel': {
    packages: [
      {
        nama: '750 MB semua jaringan bebas zona, masa aktif 7 hari',
        hargaBaru: '7.500',
        hargaLama: '',
        diskon: '',
        kode: 'sbtseldata750MB',
      },
      {
        nama: '2 GB semua jaringan + bebas zona, masa aktif 3 hari',
        hargaBaru: '12.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbtseldata2GB',
      },
      {
        nama: '800MB - 1.5GB sesuai zona, masa aktif 30 hari',
        hargaBaru: '5.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbtseldata50000',
      },
      {
        nama: 'Internet 3.3GB s/d 7GB + OMG! 1GB Sesuai Zona',
        hargaBaru: '55.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbtseldataB55',
      },
      {
        nama: 'Internet 4GB s/d 13GB + OMG! 2GB Sesuai Zona',
        hargaBaru: '75.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbtseldataB75',
      },
      {
        nama: '5 GB semua jaringan + bebas zona, masa aktif 3 hari',
        hargaBaru: '50.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbtseldata5gb',
      },
      {
        nama: 'DATA FLASH 4GB Semua jaringan bebas zona',
        hargaBaru: '40.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbtseldata4gb',
      },
      {
        nama: 'DATA FLASH 8GB Semua jaringan bebas zona',
        hargaBaru: '80.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbtseldata8gb',
      },
      {
        nama: 'Telkomsel Data ORBIT 70GB. 30 Hari',
        hargaBaru: '70.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbtseldata70',
      },
      {
        nama: 'Telkomsel Data ORBIT 130GB + EXTRA Kuota 5GB',
        hargaBaru: '130.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbtseldata130',
      },
    ],
  },
  'Tri': {
    packages: [
      {
        nama: 'Three Data Kuota Pure 100MB / 30 Hari',
        hargaBaru: '1.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbithreedataKP100MB',
      },
      {
        nama: 'Three Data Kuota Pure 1 GB / 30 Hari',
        hargaBaru: '10.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbithreedataKP1GB',
      },
      {
        nama: '3 GB semua jaringan 24 jam, Masa Aktif 3 Hari',
        hargaBaru: '30.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbithreedataS3GB3D',
      },
      {
        nama: 'Three Data Kuota Pure 5 GB / 30 Hari',
        hargaBaru: '50.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbithreedataKP5GB',
      },
      {
        nama: '30GB (8GB + 22GB 4G)',
        hargaBaru: '30.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbithreedata4G30GB',
      },
    ],
  },
  'XL': {
    packages: [
      {
        nama: 'Kuota 4GB Masa aktif 7 Hari',
        hargaBaru: '1.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbixldataHR8',
      },
      {
        nama: 'Kuota 3GB Masa aktif 7 Hari',
        hargaBaru: '1.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbixldataHR6',
      },
      {
        nama: 'Kuota 1,5GB Masa aktif 30 Hari',
        hargaBaru: '1.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbixldataHR50',
      },
      {
        nama: 'Data 3GB untuk masa aktif 30 Hari',
        hargaBaru: '1.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbixldata3gb',
      },
      {
        nama: 'Data 5GB untuk masa aktif 30 Hari',
        hargaBaru: '1.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbixldata5gb',
      },
      {
        nama: 'Kuota 8GB Masa aktif 30 Hari',
        hargaBaru: '1.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbixldataHR130',
      },
      {
        nama: 'Kuota 16GB Masa aktif 30 Hari',
        hargaBaru: '1.000',
        hargaLama: '',
        diskon: '',
        kode: 'sbixldataHR220',
      },
    ],
  },
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber.startsWith('08')) {
      setErrorMessage('Nomor telepon harus dimulai dengan 08.');
    } else if (phoneNumber.length < 10 || phoneNumber.length > 15) {
      setErrorMessage('Nomor telepon harus antara 10 hingga 15 karakter.');
    } else if (!selectedPackage) {
      setErrorMessage('Pilih paket data.');
    } else {
      console.log('Selected Provider:', selectedProvider);
      console.log('Phone Number:', phoneNumber);
      console.log('Selected Package:', selectedPackage);
      setErrorMessage('');
      // Handle form submission logic here (e.g., API call)
    }
  };

  const handleBack = () => navigate('/');

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
      if (value.length >= 10 && value.length <= 15 && value.startsWith('08')) {
        setErrorMessage('');
      } else if (!value.startsWith('08')) {
        setErrorMessage('Nomor telepon harus dimulai dengan 08.');
      } else if (value.length < 10) {
        setErrorMessage('Nomor telepon terlalu singkat, minimal 10 karakter.');
      } else if (value.length > 15) {
        setErrorMessage('Nomor telepon terlalu panjang, maksimal 15 karakter.');
      }
    }
  };

  const PaketItem = ({ nama, hargaBaru, hargaLama, diskon, isSelected, onClick }) => (
    <div
      className={`p-4 border rounded-lg mb-2 cursor-pointer ${isSelected ? 'bg-blue-100' : 'bg-white'}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">{nama}</p>
          {hargaLama && <p className="line-through text-gray-500 text-sm">Rp{hargaLama}</p>}
          <p className="text-lg font-bold text-blue-600">Rp{hargaBaru}</p>
        </div>
        {diskon && (
          <div className="bg-red-500 text-white text-sm rounded-full px-2 py-1">
            {diskon}% OFF
          </div>
        )}
      </div>
    </div>
  );

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
            <h1 className="text-lg font-semibold">Kuota</h1>
          </div>
        </div>
        <div className="max-w-lg mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Pilih Paket Data</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nomor HP</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className={`w-full p-3 border rounded-lg ${errorMessage ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Masukkan nomor HP"
            />
            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Pilih Provider</label>
            <select
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Pilih Provider</option>
              {Object.keys(paketData).map((provider) => (
                <option key={provider} value={provider}>
                  {provider}
                </option>
              ))}
            </select>
          </div>
          {selectedProvider && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Pilih Paket</label>
              {paketData[selectedProvider].packages.map((pkg, index) => (
                <PaketItem
                  key={index}
                  {...pkg}
                  isSelected={pkg.kode === selectedPackage}
                  onClick={() => setSelectedPackage(pkg.kode)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="sticky bottom-0 bg-white shadow-md p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Total Harga</span>
            <span className="text-lg font-bold text-black">
              Rp{selectedPackage && selectedProvider && paketData[selectedProvider]
                ? paketData[selectedProvider].packages.find(pkg => pkg.kode === selectedPackage)?.hargaBaru || '0'
                : '0'}
            </span>
          </div>
          <button
            onClick={handleFormSubmit}
            disabled={!selectedPackage || !phoneNumber || errorMessage}
            className={`px-4 py-2 rounded-full text-white text-sm font-semibold ${
              !selectedPackage || !phoneNumber || errorMessage
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-sky-500 hover:bg-sky-600'
            }`}
          >
            Lanjut Verifikasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kuota;