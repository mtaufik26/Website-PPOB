import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-sky-100 shadow-lg rounded-lg  px-10 max-w-lg mx-auto">
      {children}
    </div>
  );
}

export default Card;
