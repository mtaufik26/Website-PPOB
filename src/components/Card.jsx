import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="px-10 max-w-xl mx-auto">
      {children}
    </div>
  );
}

export default Card;
