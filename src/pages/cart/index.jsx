import styles from './styles.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/sectionTitle';
import Counter from '../../components/counter';
import Button from './../../components/button';
import Form from '../../components/form';
import {
  removeFromCart,
  plus,
  minus,
  emptyCart,
} from '../../redux/slices/cartSlice';
import cartDel from './../../assets/icons/cart_del.svg';
import modalClose from './../../assets/icons/modal_close.svg';

function Cart() {
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    dispatch(emptyCart());
  };

  const data = useSelector((state) => state.cart.data);
  const count = data.reduce((acc, item) => acc + item.count, 0);
  const sum = data
    .reduce((acc, item) => {
      const { product, count } = item;
      const price = product.discont_price
        ? product.discont_price
        : product.price;
      return acc + count * price;
    }, 0)
    .toFixed(2);

  return (
    <>
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
            <div className={styles.cart_order}>
              <div className={styles.cart_order_content}>
                <div className={styles.cart_order_title}>Order details</div>
                <div className={styles.cart_order_text}>
                  {count} {count === 1 ? 'item' : 'items'}
                </div>
                <div className={styles.card_order_total}>
                  <div className={styles.cart_order_text}>Total</div>
                  <div className={styles.cart_order_sum}>${sum}</div>
                </div>
              </div>
              <Form
                endpoint="order/send"
                width={'484px'}
                btn={{
                  name: 'Order',
                  nameActive: 'The Order is Placed',
                  type: 'primary',
                }}
                inputStyles={{
                  color: '#8B8B8B',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DDDDDD',
                }}
                addData={data}
                onSubmitFunc={openModal}
              />
            </div>
          </div>
        ) : (
          <div className={styles.cart_empty}>
            <div className={styles.cart__text}>
              Looks like you have no items in your basket currently.
            </div>
            <Link to="/products">
              <Button name="Continue Shopping" />
            </Link>
          </div>
        )}
      </main>
      {isOpenModal && (
        <div className={styles.modal_wrapper}>
          <div className={styles.modal_inner}>
            <div className={styles.modal_content}>
              <div className={styles.modal_title}>Congratulations!</div>
              <div className={styles.modal_text_wrapper}>
                <div className={styles.modal_text}>
                  Your order has been successfully placed on the website.
                </div>
                <div className={styles.modal_text}>
                  A manager will contact you shortly to confirm your order.
                </div>
              </div>
            </div>
            <img
              onClick={closeModal}
              className={styles.modal_btn_close}
              src={modalClose}
              alt="close"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
