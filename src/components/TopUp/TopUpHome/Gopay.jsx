// TopUp/TopUpHome/Gopay.js
import React from 'react';
import DigitalWalletPage from './DigitalWalletPage';

const gopayOptions = [
  { harga: 10000, productCode: 'SBIGOPAY10k' },
  { harga: 20000, productCode: 'SBIGOPAY20k' },
  { harga: 25000, productCode: 'SBIGOPAY25k' },
  { harga: 50000, productCode: 'SBIGOPAY50k' },
  { harga: 100000, productCode: 'SBIGOPAY100k' },
  { harga: 200000, productCode: 'SBIGOPAY200k' },
  { harga: 250000, productCode: 'SBIGOPAY250k' },
];

const Gopay = () => (
  <DigitalWalletPage walletName="Gopay" options={gopayOptions} />
);

export default Gopay;
