import styles from './styles.module.css';
import SectionTitle from '../../components/sectionTitle';
import ProductItem from '../productItem';
import { useSelector } from 'react-redux';

function ProductList({ page, title, link, id }) {
  const { data, status, error } = useSelector((state) => state.products);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>{error}</div>;

  let products = data;
  if (page === 'sales') {
    products = data.filter((item) => item.discont_price);
  } else if (page === 'sales-main') {
    products = data.filter((item) => item.discont_price).slice(0, 4);
  } else if (page === 'categories' && id) {
    products = data.filter((item) => item.categoryId === id);
  }

  if (status === 'succeeded')
    return (
      <div className={styles.products_wrapper}>
        <SectionTitle title={title} link={link} />
        <div className={styles.products_inner}>
          {products.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
}

export default ProductList;
