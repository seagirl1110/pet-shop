import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/sectionTitle';
import Counter from '../../components/counter';
import Button from './../../components/button';
import { removeFromCart, plus, minus } from '../../redux/slices/cartSlice';
import cartDel from './../../assets/icons/cart_del.svg';

function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.data);
  console.log(data);

  return (
    <main className={styles.main_container}>
      <SectionTitle
        title="Shopping cart"
        link={{ name: 'Back to the store', path: '/products' }}
      />
      {data.length ? (
        <div className={styles.cart_wrapper}>
          <div className={styles.cart_products}>
            {data.map((item) => {
              const { product, count } = item;
              const { id, image, title, price, discont_price } = product;
              const productPrice = discont_price ? discont_price : price;

              return (
                <div key={id} className={styles.product_wrapper}>
                  <div className={styles.product_image}>
                    <img
                      src={`http://localhost:3333${image}`}
                      alt={`product: ${title}`}
                    />
                  </div>
                  <div className={styles.product_content}>
                    <div className={styles.product_title_wrapper}>
                      <div className={styles.product_thumbnail}>
                        <img
                          src={`http://localhost:3333${image}`}
                          alt={`product: ${title}`}
                        />
                      </div>
                      <h4 className={styles.product_title}>{title}</h4>
                      <img
                        className={styles.priduct_btn_del}
                        onClick={() => dispatch(removeFromCart(id))}
                        src={cartDel}
                        alt="btn-delete"
                      />
                    </div>
                    <div className={styles.product_inner}>
                      <Counter
                        count={count}
                        plus={() => dispatch(plus(id))}
                        minus={() => dispatch(minus(id))}
                      />
                      <div className={styles.product_price_wrapper}>
                        <div className={styles.product_price}>
                          ${productPrice * count}
                        </div>
                        {discont_price && (
                          <div className={styles.product_price__old}>
                            ${price * count}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={styles.cart_empty}>
          <div className={styles.cart__text}>
            Looks like you have no items in your basket currently.
          </div>
          <Link to="/products">
            <Button
              name="Continue Shopping"
              defaultStyles={{
                color: '#FFFFFF',
                backgroundColor: '#0D50FF',
              }}
              hoverStyles={{
                color: '#FFFFFF',
                backgroundColor: '#282828',
              }}
            />
          </Link>
        </div>
      )}
    </main>
  );
}

export default Cart;
