import React from 'react';
import styles from './styles.module.css';
import ProductList from '../../components/productList';
import BreadCrumbsList from '../../components/breadCrumbsList';

function Sales() {
  return (
    <main className={styles.main_container}>
      <BreadCrumbsList
        list={[
          { path: '/', name: 'Main page' },
          { path: '/sale', name: 'All Sales' },
        ]}
      />
      <ProductList page="sales" title="Discounted items" />
    </main>
  );
}

export default Sales;
