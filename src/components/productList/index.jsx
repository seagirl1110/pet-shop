import styles from './styles.module.css';
import SectionTitle from '../../components/sectionTitle';
import ProductItem from '../productItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/thunks';

function ProductList({ page }) {
  const { data, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>{error}</div>;

  let products = data;
  if (page === 'sales') {
    products = data.filter((item) => item.discont_price);
  } else if (page === 'sales-main') {
    products = data.filter((item) => item.discont_price).slice(0, 4);
  }

  if (status === 'succeeded')
    return (
      <div className={styles.products_wrapper}>
        <SectionTitle
          title="Sale"
          link={{ name: 'All sales', path: '/sales' }}
        />
        <div className={styles.products_inner}>
          {products.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
}

export default ProductList;
