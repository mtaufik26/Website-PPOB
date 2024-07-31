import React from 'react';
import PulsaForm from './PulsaForm';
import PulsaOptions from './PulsaOptions';
import Card from '../Card';

const PulsaPurchase = ({ onBack }) => {
  return (
    <Card>
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="flex items-center p-4">
          <button onClick={onBack} className="mr-4 pointer-events-auto">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">Pulsa</h1>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Isi Pulsa</h1>
        <PulsaForm />
        <PulsaOptions />
      </div>
    </Card>
  );
};

export default PulsaPurchase;
