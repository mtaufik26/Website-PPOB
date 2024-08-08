import React from 'react';

const UserInfo = ({ username, balance, coins, methods }) => {
  return (
    <div className="bg-sky-200 shadow-lg rounded-lg p-6 mb-5 flex items-center justify-between max-w-lg mx-auto">
      <div>
      <h1 className="text-xl font-bold text-sky-800">Halo, {username}!</h1>
        <br />
        <p className="text-sky-600">{methods}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">Rp{coins.balance}</p>
        {/* <p className="text-gray-500">{coins.amount} Coins</p> */}
      </div>
    </div>
  );
}

export default UserInfo;