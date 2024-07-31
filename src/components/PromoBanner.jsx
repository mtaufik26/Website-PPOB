// src/PromoBanner.jsx

import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/1.png';
import image3 from '../assets/images/1.png';

const images = [image1, image2, image3];

const PromoBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4 rounded-lg overflow-hidden max-w-xl mx-auto">
      <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full p-2 flex-shrink-0">
            <img src={image} alt={`Promo ${index}`} className="h-40 w-full object-cover rounded-lg" />
          </div>    
        ))}
      </div>
      <div className="flex justify-center mt-2 ">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${currentImageIndex === index ? 'bg-slate-400' : 'bg-slate-200'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;



//   return (
//     <div className="bg-pink-500 p-4 rounded-lg shadow-lg overflow-hidden max-w-lg mx-auto">
//       <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
//         {images.map((image, index) => (
//           <div key={index} className="w-full p-2">
//             <img src={image} alt={`Promo ${index}`} className="h-32 w-full object-cover rounded-lg" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PromoBanner;
