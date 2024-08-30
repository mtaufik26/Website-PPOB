// Home.js
import React, { useState } from 'react';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';
import UserInfo from '../components/UserInfo';
import Header from '../components/Header';
import AllCategories from '../components/AllCategories';
import PromoBanner from '../components/PromoBanner';

const services = [
  { iconName: 'pulsa', title: 'Pulsa', category: 'pembelian' },
  { iconName: 'kuota', title: 'Paket Data', category: 'pembelian' },
  { iconName: 'listrik', title: 'PLN', category: 'pembelian' },
  // { iconName: 'air', title: 'PDAM', category: 'pembayaran' },
  // { iconName: 'game', title: 'TopUp Game', category: 'pembelian' },/
  // { iconName: 'bpjs', title: 'BPJS', category: 'pembayaran' },
  // { iconName: 'send', title: 'Kirim Uang', category: 'pembayaran' },
  // { iconName: 'emoney', title: 'E-Money', category: 'pembelian' },
  { iconName: 'dana', title: 'TopUp Dana', category: 'dompet digital' },
  { iconName: 'linkaja', title: 'TopUp LinkAja!', category: 'dompet digital' },
  { iconName: 'ovo', title: 'TopUp OVO', category: 'dompet digital' },
  { iconName: 'gopay', title: 'TopUp Gopay', category: 'dompet digital' },
  { iconName: 'lainnya', title: 'Seluruh Kategori', category: 'lainnya' },
];

const Home = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const handleAllCategoriesClick = () => {
    setShowAllCategories(true);
  };

  const handleBackClick = () => {
    setShowAllCategories(false);
  };

  if (showAllCategories) {
    return <AllCategories onBack={handleBackClick} />;
  }

  return (
    <div className="container mx-auto p-4 bg-white">
      <Header />
      <div className="mb-10"></div>
      <UserInfo
        username="Muhammad"
        balance="10"
        methods=""
      />
      <Card>
        <PromoBanner />
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4 cursor-pointer my-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              iconName={service.iconName} 
              title={service.title} 
              onClick={service.iconName === 'lainnya' ? handleAllCategoriesClick : null} 
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Home;