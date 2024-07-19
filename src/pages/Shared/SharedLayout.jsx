// src/pages/Shared/SharedLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header'; // Use named import
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
