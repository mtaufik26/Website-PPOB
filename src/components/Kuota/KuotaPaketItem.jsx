import React from 'react';
const KuotaPaketItem = ({ nama, harga, diskon, kuota, masaBerlaku, productCode, isSelected, onClick }) => {
  const hargaNumber = parseInt(harga.replace(/\./g, ''), 10); 
  const diskonPercentage = diskon ? parseInt(diskon, 10) : 0;

  const hargaDiskon = diskonPercentage > 0 ? Math.round(hargaNumber - (hargaNumber * diskonPercentage) / 100) : hargaNumber;

  const hargaFormatted = `Rp${hargaNumber.toLocaleString('id-ID')}`;
  const hargaDiskonFormatted = `Rp${hargaDiskon.toLocaleString('id-ID')}`;

  return (//p-2 rounded-lg flex items-center justify-center transition-all duration-200 text-lg font-semibold
    <div 
      className={`cursor-pointer rounded-lg shadow-sm p-2 mb-4 flex justify-center transition-all duration-200 items-center ${isSelected ? 'bg-blue-100 border-blue-500 transform scale-105 shadow-lg'
                : 'bg-white border border-gray-200 hover:shadow-md'}`}
      onClick={onClick}
    >
      <div className="flex flex-col justify-center items-center bg-slate-100 fill p-6 rounded-lg flex-shrink-0 w-32">
        {diskonPercentage > 0 ? (
          <>
            <div className="flex items-center mb-1">
              <div className="text-sm text-gray-400 line-through">{hargaFormatted}</div>
              <div className="text-orange-600 bg-orange-100 px-1 py-1 ml-1 rounded-full text-xs font-bold flex items-center">
                <span className="mr-1">
                  <svg className="h-4 w-4 text-orange-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <line x1="9" y1="15" x2="15" y2="9" />  
                    <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />  
                    <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />  
                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                  </svg>
                </span>
                {diskonPercentage}%
              </div>
            </div>
            <div className="text-blue-500 text-xl font-bold">{hargaDiskonFormatted}</div>
          </>
        ) : (
          <div className="text-blue-500 text-xl font-bold">{hargaFormatted}</div>
        )}
      </div>

      <div className="flex-grow ml-4 overflow-hidden">
        <div className="flex justify-between items-center mb-2">
          <div className="text-center">
            <div className="text-lg text-gray-500">Kuota</div>
            <div className="text-sm font-bold">{kuota}</div>
          </div>

          <div className="border-r border-gray-300 h-10 mx-4"></div>

          <div className="text-center">
            <div className="text-lg text-gray-500">Berlaku</div>
            <div className="text-sm font-bold">{masaBerlaku}</div>
          </div>
        </div>

        <div className="flex items-center mt-2 text-sm text-gray-500">
          <span className="truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
            {nama}
          </span>
        </div>
      </div>
    </div>
  );
};

export default KuotaPaketItem;
