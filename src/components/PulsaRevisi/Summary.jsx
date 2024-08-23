import React from 'react';

const Summary = ({ provider, denomination, phoneNumber }) => {
    if (!provider || !denomination || phoneNumber.length < 10) return null;

    return (
    <div className="p-4 border rounded-lg bg-gray-50 shadow-inner">
        <h2 className="text-lg font-bold mb-2 text-sky-600">Ringkasan Transaksi</h2>
        <p className="text-sm">Provider: {provider.charAt(0).toUpperCase() + provider.slice(1)}</p>
        <p className="text-sm">Nomor HP: {phoneNumber}</p>
        <p className="text-sm">Nominal: Rp{denomination.toLocaleString()}</p>
        <p className="text-sm font-bold text-red-600">Total: Rp{denomination.toLocaleString()}</p>
    </div>
);
};

export default Summary;
