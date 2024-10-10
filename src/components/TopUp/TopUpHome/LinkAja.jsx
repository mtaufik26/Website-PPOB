// TopUp/TopUpHome/LinkAja.js
import React from 'react';
import DigitalWalletPage from './DigitalWalletPage';

const linkAjaOptions = [
  { harga: 10000, productCode: 'SBILINKAJA10k' },
  { harga: 25000, productCode: 'SBILINKAJA25k' },
  { harga: 50000, productCode: 'SBILINKAJA50k' },
  { harga: 100000, productCode: 'SBILINKAJA100k' },
];

const LinkAja = () => (
  <DigitalWalletPage walletName="LinkAja" options={linkAjaOptions} />
);

export default LinkAja;
