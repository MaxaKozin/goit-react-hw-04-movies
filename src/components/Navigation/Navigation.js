
import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigations.module.css';

const Navigation = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          activeClassName={styles.link_active}
          to={routes.home}
          exact>
          Home
          </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          activeClassName={styles.link_active}
          to={routes.movies}
          exact>
          Movies
          </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;