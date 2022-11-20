import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import FallStockPage from '../features/fallStock/FallStockPage';
import ComparisonPage from '../features/comparison/ComparisonPage';
import DividendListPage from '../features/dividendList/DividendListPage';

const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="fallstock" element={<FallStockPage />} />
            <Route path="compare" element={<ComparisonPage />} />
            <Route path="dividend-list" element={<DividendListPage />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;
