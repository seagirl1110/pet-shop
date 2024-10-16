import styles from './styles.module.css';
import { Input, Checkbox, Select } from 'antd';

function FilterComponent({ filterData, changeFilterData, page }) {
  const { priceFrom, priceTo, discounted, sorted } = filterData;
  const handleChangePrice = (evt) => {
    changeFilterData(evt.target.name, evt.target.value);
  };

  const handleChangeDiscounted = (evt) => {
    changeFilterData(evt.target.name, evt.target.checked);
  };

  const handleChangeSorted = (value) => {
    changeFilterData('sorted', value);
  };

  return (
    <div className={styles.filter_wrapper}>
      <div className={styles.filter_inner}>
        <div className={styles.filter_title}>Price</div>
        <Input
          type="number"
          className={styles.filter_price_input}
          placeholder="from"
          min={1}
          value={priceFrom}
          onChange={handleChangePrice}
          name="priceFrom"
        />
        <Input
          type="number"
          className={styles.filter_price_input}
          placeholder="to"
          min={1}
          value={priceTo}
          onChange={handleChangePrice}
          name="priceTo"
        />
      </div>
      {page !== 'sales' && (
        <div className={styles.filter_inner}>
          <div className={styles.filter_title}>Discounted items</div>
          <Checkbox
            className={styles.filter_discounted_checkbox}
            checked={discounted}
            onChange={handleChangeDiscounted}
            name="discounted"
          />
        </div>
      )}
      <div className={styles.filter_inner}>
        <div className={styles.filter_title}>Sorted</div>
        <Select
          className={styles.filter_sorted_select}
          defaultValue={sorted}
          onChange={handleChangeSorted}
          name="sorted"
          options={[
            { value: 'by default', label: 'by default' },
            { value: 'price: high-low', label: 'price: high-low' },
            { value: 'price: low-high', label: 'price: low-high' },
            { value: 'name: a-z', label: 'name: a-z' },
            { value: 'name: z-a', label: 'name: z-a' },
          ]}
        />
      </div>
    </div>
  );
}

export default FilterComponent;
