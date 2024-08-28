import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Card from '../Card'

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
      className={`relative flex justify-between items-center p-4 border rounded-lg shadow-lg cursor-pointer transition-transform transform ${
        isSelected ? 'bg-blue-100 border-blue-500 scale-105' : 'bg-white border-gray-200 hover:scale-105 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{nama}</h2>
        <div className="flex items-baseline space-x-2">
          <p className="text-md font-bold text-gray-900">Rp{hargaBaru}</p>
          {hargaLama && (
            <p className="text-sm line-through text-gray-500">Rp{hargaLama}</p>
          )}
        </div>
      </div>
      {diskon && (
        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
          {diskon}% OFF
        </div>
      )}
    </div>
  );

  return (
    <Card className="bg-gradient-to-r from-blue-100 to-blue-50 shadow-xl rounded-lg p-8">
      <div className="sticky top-0 bg-white z-10 border-b shadow-sm">
        <div className="flex items-center p-4">
          <button onClick={handleBack} className="mr-4 text-gray-700 hover:text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-700">Paket Data</h1>
        </div>
      </div>

      <div className="p-6 max-w-lg mx-auto bg-white shadow-2xl rounded-lg">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="provider">
              Pilih Provider
            </label>
            <div className="relative">
              <select
                id="provider"
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                required
              >
                <option value="" disabled>Pilih provider...</option>
                {Object.keys(paketData).map((provider) => (
                  <option key={provider} value={provider}>
                    {provider}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              No. Telepon
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full p-3 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Contoh: 08xxxxxxxxxx"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
          </div>

          {selectedProvider && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Pilih Paket Data</label>
              <div className="space-y-4">
                {paketData[selectedProvider].packages.map((paket) => (
                  <PaketItem
                    key={paket.kode}
                    nama={paket.nama}
                    hargaBaru={paket.hargaBaru}
                    hargaLama={paket.hargaLama}
                    diskon={paket.diskon}
                    isSelected={selectedPackage === paket.kode}
                    onClick={() => setSelectedPackage(paket.kode)}
                  />
                ))}
              </div>
            </div>
          )}

<div className="flex justify-between items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md">
  <div>
    <p className="text-sm text-gray-500">Total Harga</p>
    <p className="text-xl font-bold text-gray-900">
      Rp{selectedPackage && paketData[selectedProvider]?.packages.find(paket => paket.kode === selectedPackage)?.hargaBaru || '0'}
    </p>
  </div>
  <button
    type="submit"
    disabled={!selectedPackage || !phoneNumber}
    className={`py-2 px-6 rounded-full text-white transition duration-300 ease-in-out transform ${
      selectedPackage && phoneNumber
        ? 'bg-blue-600 hover:bg-blue-700'
        : 'bg-gray-400 cursor-not-allowed'
    }`}
  >
    Lanjut Verifikasi
  </button>
</div>
        </form>
      </div>
    </Card>
  );
};

export default Kuota;