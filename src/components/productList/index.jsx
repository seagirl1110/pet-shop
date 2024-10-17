import React from 'react';
import styles from './styles.module.css';
import SectionTitle from '../../components/sectionTitle';
import ProductItem from '../productItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import FilterComponent from '../filterComponent';

function ProductList({ page, title, link, id }) {
  const [filterData, setFilterData] = useState({
    priceFrom: null,
    priceTo: null,
    discounted: false,
    sorted: 'by default',
  });

  const changeFilterData = (name, value) => {
    setFilterData({ ...filterData, [name]: value });
  };

  const { data, status, error } = useSelector((state) => state.products);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>{error}</div>;

  if (status === 'succeeded') {
    let products = [...data];

    if (page === 'sales') {
      products = data.filter((item) => item.discont_price);
    } else if (page === 'sales-main') {
      products = data.filter((item) => item.discont_price).slice(0, 4);
    } else if (page === 'categories' && id) {
      products = data.filter((item) => item.categoryId === id);
    }

    if (filterData.priceFrom) {
      products = products.filter((item) => {
        const price = item.discont_price ?? item.price;
        return price >= filterData.priceFrom;
      });
    }

    if (filterData.priceTo) {
      products = products.filter((item) => {
        const price = item.discont_price ?? item.price;
        return price <= filterData.priceTo;
      });
    }

    if (filterData.discounted) {
      products = products.filter((item) => item.discont_price);
    }

    if (filterData.discounted) {
      products = products.filter((item) => item.discont_price);
    }

    if (products.length > 1) {
      if (filterData.sorted === 'price: high-low') {
        products.sort((a, b) => {
          const priceA = a.discont_price ?? a.price;
          const priceB = b.discont_price ?? b.price;
          return priceB - priceA;
        });
      }

      if (filterData.sorted === 'price: low-high') {
        products.sort((a, b) => {
          const priceA = a.discont_price ?? a.price;
          const priceB = b.discont_price ?? b.price;
          return priceA - priceB;
        });
      }

      if (filterData.sorted === 'name: a-z') {
        products.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        });
      }

      if (filterData.sorted === 'name: z-a') {
        products.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          if (titleA > titleB) return -1;
          if (titleA < titleB) return 1;
          return 0;
        });
      }
    }

    return (
      <div className={styles.products_wrapper}>
        <SectionTitle title={title} link={link} />
        {page !== 'sales-main' && (
          <FilterComponent
            filterData={filterData}
            changeFilterData={changeFilterData}
            page={page}
          />
        )}
        <div className={styles.products_inner}>
          {products.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      </div>
    );
  }
}
export default ProductList;
