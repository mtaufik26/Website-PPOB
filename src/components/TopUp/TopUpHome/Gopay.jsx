// TopUp/TopUpHome/Gopay.js
import React from 'react';
import DigitalWalletPage from './DigitalWalletPage';

const gopayOptions = [
  { amount: 10000, productCode: 'SBIGOPAY10k' },
  { amount: 20000, productCode: 'SBIGOPAY20k' },
  { amount: 25000, productCode: 'SBIGOPAY25k' },
  { amount: 50000, productCode: 'SBIGOPAY50k' },
  { amount: 100000, productCode: 'SBIGOPAY100k' },
  { amount: 200000, productCode: 'SBIGOPAY200k' },
  { amount: 250000, productCode: 'SBIGOPAY250k' },
];

const Gopay = () => (
  <DigitalWalletPage walletName="Gopay" options={gopayOptions} />
);

export default Gopay;
