import React from 'react';

const PurchaseDetails = ({ purchaseDetails }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h3 className="text-sm text-gray-600 mb-2">Detail Pembelian</h3>
      <p className="text-sm">Jenis Layanan: Rp {purchaseDetails.amount ? purchaseDetails.amount.toLocaleString() : '0'}</p>
      <p className="text-sm">Nomor: {purchaseDetails.id}</p>
      <p className="text-sm">Nama: {purchaseDetails.name || '-'}</p>
      <p className="text-sm">Tarif/Daya: {purchaseDetails.rate || '-'}</p>
    </div>
  );
};

export default PurchaseDetails;