import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import discountBanner from './../../assets/image/discount_banner.png';
import CategoryList from '../../components/categoryList';
import Form from '../../components/form';
import Button from '../../components/button';
import ProductList from '../../components/productList';

function Main() {
  return (
    <main className={styles.main_container}>
      <div className={styles.banner}>
        <h1 className={styles.title}>Amazing Discounts on Pets Products!</h1>
        <Link to="/sale">
          <Button
            name="Check out"
            defaultStyles={{
              color: '#FFFFFF',
              backgroundColor: '#0D50FF',
            }}
            hoverStyles={{
              color: '#FFFFFF',
              backgroundColor: '#282828',
            }}
          />
        </Link>
      </div>
      <CategoryList page="main" />
      <section className={styles.discount_wrapper}>
        <h2 className={styles.discount_title}>5% off on the first order</h2>
        <div className={styles.discount_inner}>
          <img
            className={styles.discount_banner}
            src={discountBanner}
            alt="pets_banner"
          />
          <div className={styles.discount_form}>
            <Form
              endpoint="sale/send"
              width={'516px'}
              btn={{
                nameDefault: 'Get a discount',
                nameActive: 'Request Submitted',
                defaultStyles: {
                  color: '#282828',
                  backgroundColor: '#FFFFFF',
                },
                hoverStyles: {
                  color: '#FFFFFF',
                  backgroundColor: '#282828',
                },
                activeStyles: {
                  color: '#0D50FF',
                  backgroundColor: '#F1F3F4',
                  pointerEvents: 'none',
                },
              }}
              inputStyles={{
                color: '#FFFFFF',
                backgroundColor: 'transparent',
                border: '1px solid #FFFFFF',
              }}
            />
          </div>
        </div>
      </section>
      <ProductList
        page="sales-main"
        title="Sale"
        link={{ name: 'All sales', path: '/sale' }}
      />
    </main>
  );
}

export default Main;
