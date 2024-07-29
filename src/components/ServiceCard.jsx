import React from 'react';
import cellphoneIcon from '../assets/images/cellphone.png'; // Import gambar PNG

const ServiceCard = ({ icon, title }) => {
  // Mapping icon string to image source
  const iconImages = {
    cellphone: cellphoneIcon,
    // Tambahkan gambar PNG lainnya di sini jika diperlukan
  };

  return (
    <div className="flex flex-col items-center p-4 text-center">
      <img src={iconImages[icon]} alt={title} className="w-11 mb-2" /> {/* Menggunakan gambar PNG */}
      <h2 className="text-base font-semibold text-center break-words w-full">{title}</h2>
    </div>
  );
}

export default ServiceCard;
