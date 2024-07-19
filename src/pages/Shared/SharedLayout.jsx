import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header'; 
import styles from './SharedLayout.module.css'; 

const SharedLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
