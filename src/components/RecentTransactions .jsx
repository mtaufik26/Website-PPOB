import React from 'react';

const transactions = [
  { id: 1, type: 'Pulsa', amount: 'Rp50.000', date: '2023-05-01' },
  { id: 2, type: 'PLN', amount: 'Rp200.000', date: '2023-04-30' },
  { id: 3, type: 'TopUp OVO', amount: 'Rp100.000', date: '2023-04-29' },
];

const RecentTransactions = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transaksi Terakhir</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between items-center border-b py-2">
            <div>
              <p className="font-medium">{transaction.type}</p>
              <p className="text-sm text-gray-600">{transaction.date}</p>
            </div>
            <p className="font-medium">{transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;