// TopUp/TopUpHome/Dana.js
import React from 'react';
import DigitalWalletPage from './DigitalWalletPage';

const danaOptions = [
  { amount: 10000, productCode: 'SBIDANA10k' },
  { amount: 20000, productCode: 'SBIDANA20k' },
  { amount: 25000, productCode: 'SBIDANA25k' },
  { amount: 50000, productCode: 'SBIDANA50k' },
  { amount: 100000, productCode: 'SBIDANA100k' },
  { amount: 200000, productCode: 'SBIDANA200k' },
];

const Dana = () => (
  <DigitalWalletPage walletName="Dana" options={danaOptions} />
);

export default Dana;
