import styles from './styles.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SectionTitle from '../../components/sectionTitle';
import CategoryItem from '../categoryItem';

function CategoryList({ page }) {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3333/categories/all');
      const data = page === 'main' ? response.data.slice(0, 4) : response.data;
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const link =
    page === 'categories'
      ? null
      : { name: 'All categories', path: '/categories' };

  return (
    <section className={styles.categories_wrapper}>
      <SectionTitle title="Categories" link={link}></SectionTitle>
      <div className={styles.categories_inner}>
        {categories.map((item) => (
          <CategoryItem
            key={item.id}
            title={item.title}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
