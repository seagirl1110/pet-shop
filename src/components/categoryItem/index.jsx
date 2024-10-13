import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

function CategoryItem({ title, image, id }) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => navigate(`/categories/${id}`)}
        className={styles.category}
      >
        <img
          src={`http://localhost:3333${image}`}
          alt={`category: ${title}`}
          className={styles.category_image}
        />
        <h4 className={styles.category_title}>{title}</h4>
      </div>
    </div>
  );
}

export default CategoryItem;
