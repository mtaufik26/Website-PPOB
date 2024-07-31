import React from 'react';
import Card from '../Card';
import Back from '../Back';

const PulsaForm = ({ onBack }) => {
  return (
    <Card>
      <div className="mb-4">
        <form className="flex items-center">
          <div className="flex-grow mr-2">
            <input
              type="text"
              placeholder="Masukkan No HP"
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-gray-200 text-gray-400 px-4 py-2 rounded">
            Kirim
          </button>
        </form>
        {/* <div className="mt-2 bg-pink-100 text-pink-600 p-2 rounded-lg inline-block">
          Kirim-Kirim Pulsa ke teman kamu, yuk!
          <button className="ml-2 bg-orange-500 text-white px-4 py-1 rounded">
            Kirim
          </button>
        </div> */}
      </div>
    </Card>
  );
};

export default PulsaForm;
