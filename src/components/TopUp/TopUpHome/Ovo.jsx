// TopUp/TopUpHome/Ovo.js
import React from 'react';
import DigitalWalletPage from './DigitalWalletPage';

const ovoOptions = [
  { harga: 20000, productCode: 'SBIOVO20k' },
  { harga: 25000, productCode: 'SBIOVO25k' },
  { harga: 50000, productCode: 'SBIOVO50k' },
  { harga: 100000, productCode: 'SBIOVO100k' },
  { harga: 200000, productCode: 'SBIOVO200k' },
];

const Ovo = () => (
  <DigitalWalletPage walletName="Ovo" options={ovoOptions} />
);

export default Ovo;
