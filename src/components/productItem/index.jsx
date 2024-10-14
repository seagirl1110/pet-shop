import ButtonAddToCart from '../buttonAddToCart';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function ProductItem({ title, image, id, price, discont_price }) {
  const productPrice = discont_price ? discont_price : price;

  return (
    <div className={styles.product_wrapper}>
      <Link to={`/products/${id}`} className={styles.product_inner}>
        <div className={styles.product_image}>
          <img
            src={`http://localhost:3333${image}`}
            alt={`product: ${title}`}
          />
        </div>
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
      <div className={styles.product_btn}>
        <ButtonAddToCart />
      </div>
    </div>
  );
}

export default ProductItem;
