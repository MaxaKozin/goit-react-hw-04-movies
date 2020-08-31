import React from 'react';
import Navigation from '../Navigation/Navigation';

import s from './Appbar.module.css';

const Apbbar = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}

export default Apbbar;