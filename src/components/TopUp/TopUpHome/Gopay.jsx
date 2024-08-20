// TopUp/TopUpHome/Gopay.js
import React from 'react';
import DigitalWalletPage4 from './DigitalWalletPage4';

const gopayOptions = [
  { amount: 5000, admin: 2000 },
  { amount: 10000, admin: 2000 },
  { amount: 25000, admin: 2000 },
  { amount: 40000, admin: 2000 },
  { amount: 50000, admin: 2000 },
  { amount: 60000, admin: 2000 },
  { amount: 75000, admin: 2000 },
  { amount: 80000, admin: 2000 },
  { amount: 90000, admin: 2000 },
  { amount: 100000, admin: 2000 },
  { amount: 150000, admin: 5000 },
  { amount: 200000, admin: 5000 },
  { amount: 300000, admin: 5000 },
  { amount: 500000, admin: 10000 },
];

const Gopay = () => (
  <DigitalWalletPage4 walletName="Gopay" options={gopayOptions} />
);

export default Gopay;