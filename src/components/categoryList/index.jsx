import styles from './styles.module.css';
import SectionTitle from '../../components/sectionTitle';
import CategoryItem from '../categoryItem';
import { useSelector } from 'react-redux';

function CategoryList({ page }) {
  const categoriesData = useSelector((state) => state.categories.data);

  const categories =
    page === 'main' ? categoriesData.slice(0, 4) : categoriesData;

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
