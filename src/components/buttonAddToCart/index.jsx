import styles from './styles.module.css';
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
      className={styles.btn}
      onClick={handleClick}
      name={isAdded ? 'Added' : 'Add to cart'}
      defaultStyles={
        isAdded
          ? {
              color: ' #282828',
              backgroundColor: '#FFFFFF',
              border: '1px solid #282828',
              pointerEvents: 'none',
            }
          : {
              color: '#FFFFFF',
              backgroundColor: '#0D50FF',
              border: '1px solid #0D50FF',
            }
      }
      hoverStyles={{
        color: '#FFFFFF',
        backgroundColor: '#282828',
        border: '1px solid #282828',
      }}
    />
  );
}

export default ButtonAddToCart;
