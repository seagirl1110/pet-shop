import styles from './styles.module.css';
import { useState } from 'react';
import Button from '../button';

function ButtonAddToCart() {
  const [isAdded, setIsAdded] = useState(false);
  return (
    <Button
      className={styles.btn}
      onClick={() => setIsAdded(true)}
      name={isAdded ? 'Added' : 'Add to cart'}
      defaultStyles={
        isAdded
          ? {
              color: ' #282828',
              backgroundColor: '#FFFFFF',
              border: '1px solid #282828',
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
