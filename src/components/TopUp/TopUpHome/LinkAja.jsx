// TopUp/TopUpHome/LinkAja.js
import React from 'react';
import DigitalWalletPage from './DigitalWalletPage';

const linkAjaOptions = [
  { amount: 10000, productCode: 'SBILINKAJA10k' },
  { amount: 25000, productCode: 'SBILINKAJA25k' },
  { amount: 50000, productCode: 'SBILINKAJA50k' },
  { amount: 100000, productCode: 'SBILINKAJA100k' },
];

const LinkAja = () => (
  <DigitalWalletPage walletName="LinkAja" options={linkAjaOptions} />
);

export default LinkAja;
