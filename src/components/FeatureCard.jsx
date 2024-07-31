import React from 'react';

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center p-4 w-32">
      <div className="text-3xl mb-2">{icon}</div>
      <h2 className="text-base font-semibold text-center break-words w-full">{title}</h2>
    </div>
  );
}

export default FeatureCard;
