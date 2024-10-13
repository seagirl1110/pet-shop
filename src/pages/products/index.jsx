import styles from './styles.module.css';
import ProductList from '../../components/productList';
import BreadCrumbsList from '../../components/breadCrumbsList';

function Products() {
  return (
    <main className={styles.main_container}>
      <BreadCrumbsList
        list={[
          { path: '/', name: 'Main page' },
          { path: '/products', name: 'All Products' },
        ]}
      />
      <ProductList page="products" title="All products" />
    </main>
  );
}

export default Products;
