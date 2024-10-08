import { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Button from '../button';

function ProductItem({ title, image, id, price, discont_price }) {
  const [isAdded, setIsAdded] = useState(false);

  let productPrice = discont_price ? discont_price : price;

  return (
    <div className={styles.product_wrapper}>
      <Link to={`/products/${id}`} className={styles.product_inner}>
        <img
          src={`http://localhost:3333${image}`}
          alt={`product: ${title}`}
          className={styles.product_image}
        />
        {discont_price && (
          <div className={styles.product_sale}>
            -{Math.ceil(((price - discont_price) / price) * 100)}%
          </div>
        )}
        <div className={styles.product_content}>
          <h4 className={styles.product_title}>{title}</h4>
          <div className={styles.product_price_wrapper}>
            <div className={styles.product_price}>${productPrice}</div>
            {discont_price && (
              <div className={styles.product_price__old}>${price}</div>
            )}
          </div>
        </div>
      </Link>
      <Button
        className={styles.product_btn}
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
      ></Button>
    </div>
  );
}

export default ProductItem;
