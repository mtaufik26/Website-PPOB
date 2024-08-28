// TopUp/TopUpHome/Ovo.js
import React from 'react';
import DigitalWalletPage from './DigitalWalletPage';

const ovoOptions = [
  { amount: 20000, productCode: 'SBIOVO20k' },
  { amount: 25000, productCode: 'SBIOVO25k' },
  { amount: 50000, productCode: 'SBIOVO50k' },
  { amount: 100000, productCode: 'SBIOVO100k' },
  { amount: 200000, productCode: 'SBIOVO200k' },
];

const Ovo = () => (
  <DigitalWalletPage walletName="Ovo" options={ovoOptions} />
);

export default Ovo;
