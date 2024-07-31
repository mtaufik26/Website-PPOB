import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pulsa, Kuota, PLN, Game, Emoney, Air, BPJS, TransferBank, Wallet, Send, Dana, LinkAja, Lainnya } from '../icons/icon'; // Adjust import path as needed

const icons = {
  pulsa: Pulsa,
  kuota: Kuota,
  listrik: PLN,
  game: Game,
  emoney: Emoney,
  air: Air,
  bpjs: BPJS,
  transferbank: TransferBank,
  wallet: Wallet,
  send: Send,
  dana: Dana,
  linkaja: LinkAja,
  lainnya: Lainnya,
  // Add other icons here
};

const ServiceCard = ({ iconName, title, onClick }) => {
  const Icon = icons[iconName];
  const navigate = useNavigate();

  const handleClick = () => {
    if (iconName === 'pulsa') {
      navigate('/pulsa');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="flex flex-col items-center p-4 text-center bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition-all"
      onClick={handleClick}
    >
      <div className="text-lg mb-1">
        {Icon ? <Icon className="w-11 h-10" /> : null}
      </div>
      <h2 className="text-base text-center break-words w-full">{title}</h2>
    </button>
  );
}

export default ServiceCard;