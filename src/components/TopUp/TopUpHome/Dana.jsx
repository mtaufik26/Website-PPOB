// TopUp/TopUpHome/Dana.js
import React from 'react';
import DigitalWalletPage from './DigitalWalletPage';

const danaOptions = [
  { harga: 10000, productCode: 'SBIDANA10k' },
  { harga: 20000, productCode: 'SBIDANA20k' },
  { harga: 25000, productCode: 'SBIDANA25k' },
  { harga: 50000, productCode: 'SBIDANA50k' },
  { harga: 100000, productCode: 'SBIDANA100k' },
  { harga: 200000, productCode: 'SBIDANA200k' },
];

const Dana = () => (
  <DigitalWalletPage walletName="Dana" options={danaOptions} />
);

export default Dana;
