import React from 'react';
import styles from './styles.module.css';
import BreadCrumbsItem from '../breadCrumbsItem';

function SectionTitle({ title, link }) {
  return (
    <div className={styles.title_container}>
      <h2 className={styles.title}>{title}</h2>
      {link && (
        <>
          <div className={styles.divider} />
          <BreadCrumbsItem {...link} />
        </>
      )}
    </div>
  );
}

export default SectionTitle;
