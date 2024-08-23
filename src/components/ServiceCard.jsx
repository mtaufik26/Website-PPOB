import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pulsa,Kuota,PLN, Game, Emoney, Air, BPJS, Wallet, Send, Dana, LinkAja, OVO, Gopay, Lainnya } from '../icons/icon';

const icons = {
  pulsa: Pulsa,
  Kuota: Kuota,
  listrik: PLN,
  game: Game,
  emoney: Emoney,
  air: Air,
  bpjs: BPJS,
  wallet: Wallet,
  send: Send,
  dana: Dana,
  linkaja: LinkAja,
  ovo: OVO,
  gopay: Gopay,
  lainnya: Lainnya,
};

const ServiceCard = ({ iconName, title, onClick }) => {
  const Icon = icons[iconName];
  const navigate = useNavigate();

  const handleClick = () => {
    if (iconName === 'pulsa') {
      navigate('/topup-pulsa');
    } else if (iconName === 'kuota') {
      navigate('/kuota');
    } else if (iconName === 'listrik') {
      navigate('/pln');
    } else if (iconName === 'send') {
      navigate('/kirim-uang');
    } else if (iconName === 'dana') {
      navigate('/dana');
    } else if (iconName === 'linkaja') {
      navigate('/linkaja');
    } else if (iconName === 'ovo') {
      navigate('/ovo');
    } else if (iconName === 'gopay') {
      navigate('/gopay');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="flex flex-col items-center p-4 text-center bg-white rounded-lg shadow-md hover:bg-gray-300 transition-all"
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