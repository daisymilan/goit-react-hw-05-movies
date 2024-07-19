import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <Link to="/" className={css.navLink}>Home</Link>
          </li>
          <li className={css.navItem}>
            <Link to="/movies" className={css.navLink}>Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;