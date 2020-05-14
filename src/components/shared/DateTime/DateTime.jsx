import React from 'react';
import styles from './DateTime.module.css';

const DateTime = () => {
  const dt = new Date().toLocaleDateString();
  return (
    <React.Fragment>
      <div className={styles.dateTimeWrapper}>{dt}</div>
    </React.Fragment>
  );
};

export default DateTime;
