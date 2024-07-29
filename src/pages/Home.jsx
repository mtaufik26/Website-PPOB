import React from 'react';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    { icon: 'cellphone', title: 'Pulsa' },
    { icon: 'cellphone', title: 'Paket Data' }, // Contoh lain dengan gambar yang sama
    // Tambahkan lebih banyak layanan sesuai kebutuhan
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Selamat Datang di PPOB</h1>
      <Card>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-1">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Home;
