import React from 'react';
import { useState } from 'react';
import Button from '../button';

function ButtonAddToCart({ onClick }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(true);
    onClick();
  };

  return (
    <Button
      onClick={handleClick}
      name={isAdded ? 'Added' : 'Add to cart'}
      isActive={isAdded}
    />
  );
}

export default ButtonAddToCart;
