import styles from './styles.module.css';
import CategoryList from '../../components/categoryList';
import BreadCrumbsList from '../../components/breadCrumbsList';

function Categories() {
  return (
    <main className={styles.main_container}>
      <BreadCrumbsList
        list={[
          { path: '/', name: 'Main page' },
          { path: '/categories', name: 'Categories' },
        ]}
      />
      <CategoryList page="categories" />
    </main>
  );
}

export default Categories;
