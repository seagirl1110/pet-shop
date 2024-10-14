import styles from './styles.module.css';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import BreadCrumbsList from '../../components/breadCrumbsList';
import ButtonAddToCart from '../../components/buttonAddToCart';
import Counter from '../../components/counter';
import { addToCart } from '../../redux/slices/cartSlice';

function Product() {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const { id } = useParams();
  const {
    data: products,
    error,
    status,
  } = useSelector((state) => state.products);

  const categories = useSelector((state) => state.categories.data);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>{error}</div>;

  if (status === 'succeeded') {
    const product = products.find((product) => product.id === +id);
    const { title, price, discont_price, description, image, categoryId } =
      product;

    const categoryName = categories.find(
      (category) => category.id === categoryId
    )?.title;

    const productPrice = discont_price ? discont_price : price;

    return (
      <main className={styles.main_container}>
        <BreadCrumbsList
          list={[
            { path: '/', name: 'Main page' },
            { path: '/categories', name: 'Categories' },
            { path: `/categories/${product.categoryId}`, name: categoryName },
            { path: pathname, name: product.title },
          ]}
        />
        <div className={styles.product_wrapper}>
          <div className={styles.product_image}>
            <img
              src={`http://localhost:3333${image}`}
              alt={`product: ${title}`}
            />
          </div>
          <div className={styles.product_inner}>
            <h4 className={styles.product_title}>{title}</h4>
            <div className={styles.product_price_wrapper}>
              <div className={styles.product_price}>${productPrice}</div>
              {discont_price && (
                <div className={styles.product_price_inner}>
                  <div className={styles.product_price__old}>${price}</div>
                  <div className={styles.product_sale_wrapper}>
                    <div className={styles.product_sale}>
                      -{Math.ceil(((price - discont_price) / price) * 100)}%
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.product_cart}>
              <Counter
                count={count}
                plus={() => setCount(count + 1)}
                minus={() => setCount(count - 1)}
              />
              <div className={styles.product_btn}>
                <ButtonAddToCart
                  onClick={() => dispatch(addToCart({ product, count }))}
                />
              </div>
            </div>
            <div className={styles.product_content}>
              <p className={styles.product_description_title}>Description</p>
              <p className={styles.product_description_text}>{description}</p>
              <p className={styles.product_description_btn}>Read more</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Product;
