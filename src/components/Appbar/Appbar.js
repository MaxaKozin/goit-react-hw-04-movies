
import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Appbar.module.css';

const Apbbar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}

export default Apbbar;