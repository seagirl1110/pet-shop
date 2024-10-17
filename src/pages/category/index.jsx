import React from 'react';
import styles from './styles.module.css';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './../../components/productList';
import BreadCrumbsList from './../../components/breadCrumbsList';

function Category() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const categories = useSelector((state) => state.categories.data);
  const categoryName = categories.find(
    (category) => category.id === +id
  )?.title;

  return (
    <main className={styles.main_container}>
      <BreadCrumbsList
        list={[
          { path: '/', name: 'Main page' },
          { path: '/categories', name: 'Categories' },
          { path: pathname, name: categoryName },
        ]}
      />
      <ProductList page="categories" id={+id} title={categoryName} />
    </main>
  );
}

export default Category;
