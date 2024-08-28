import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const DigitalWalletPage = ({ walletName, options }) => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleBack = () => navigate('/');

    const handlePhoneChange = (e) => {
        let input = e.target.value.replace(/[^0-9]/g, ''); // Hanya izinkan angka
        setPhone(input); // Set state phone dengan input yang sudah diproses

        // Validasi input
        if (input.length === 0) {
            setErrorMessage('');
            setIsValid(false);
        } else if (!input.startsWith('8') && input.length > 1) { // Nomor harus dimulai dengan '8' setelah +62
            setErrorMessage('Nomor harus dimulai dengan 8 setelah +62.');
            setIsValid(false);
        } else if (input.length < 9) { // Minimal panjang nomor setelah +62 adalah 9
            setErrorMessage('Nomor terlalu singkat | minimal 9 karakter.');
            setIsValid(false);
        } else {
            setErrorMessage('');
            setIsValid(true);
        }
    };

    // Menggunakan useEffect untuk menghilangkan angka 0 di awal jika ada
    useEffect(() => {
        if (phone.startsWith('0') && phone.length > 1) {
            setPhone(phone.substring(1)); // Hapus angka 0 di awal jika lebih dari 1 karakter
        }
    }, [phone]);

    const handleCheck = () => {
        if (isValid) {
            setLoading(true);
            setTimeout(() => {
                const isSuccess = true;
                if (isSuccess) {
                    setChecked(true);
                } else {
                    setErrorMessage('Gagal memproses top-up, coba lagi nanti.');
                }
                setLoading(false);
            }, 2000);
        }
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleVerification = () => {
        if (isValid && selectedOption && phone) {
            // Use productCode for backend communication, not for UI display
            const requestData = {
                total: selectedOption.amount,
                phone: `+62${phone}`,
                nominal: selectedOption.amount,
                productCode: selectedOption.productCode, 
                walletName,
            };

            // Mocking backend interaction with navigate
            navigate('/payment-page', {
                state: requestData,
            });
        }
    };

    const isOptionSelected = selectedOption !== null;
    const isPhoneNumberValid = phone.length >= 9 && !errorMessage;

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
                        <h1 className="text-lg font-semibold">Dompet Digital - {walletName}</h1>
                    </div>
                </div>
                <div className="max-w-lg mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Top-Up {walletName}</h1>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Pilih Nominal Anda</label>
                        <div className="relative">
                            <select
                                value={selectedOption?.amount || ''}
                                onChange={(e) => handleOptionClick(options.find(opt => opt.amount == e.target.value))}
                                className="w-full p-2 border rounded-lg focus:outline-none appearance-none"
                            >
                                <option value="">Pilih Nominal</option>
                                {options.map((option) => (
                                    <option key={option.amount} value={option.amount}>
                                        Rp {option.amount.toLocaleString('id-ID')}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nomor HP</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500">+62</span>
                            </div>
                            <input
                                type="text"
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder="xxxxxxxxx"
                                className={classNames(
                                    'w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-1 shadow-sm',
                                    errorMessage ? 'focus:ring-red-500 border-red-500' : 'focus:ring-sky-500 border-gray-300'
                                )}
                            />
                        </div>
                        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                    </div>
                    {checked && (
                        <div className="mt-4 bg-gray-100 p-3 rounded-lg">
                            <h2 className="text-base font-semibold mb-3">Top-up {walletName}</h2>
                            <div className="text-gray-700 text-sm">
                                <p className="flex justify-between">
                                    <span className="font-semibold">Nomor HP:</span>
                                    <span>+62{phone}</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="font-semibold">Nominal Top-up:</span>
                                    <span>Rp {selectedOption.amount.toLocaleString('id-ID')}</span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="sticky bottom-0 bg-white shadow-md p-4 border-t">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Total Harga</span>
                        <span className="text-lg font-bold text-black">
                            Rp{selectedOption ? selectedOption.amount.toLocaleString('id-ID') : '0'}
                        </span>
                    </div>
                    <button
                        onClick={handleVerification}
                        disabled={!isOptionSelected || !isPhoneNumberValid}
                        className={`px-4 py-2 rounded-full text-white text-sm font-semibold ${
                            !isOptionSelected || !isPhoneNumberValid
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

export default DigitalWalletPage;
