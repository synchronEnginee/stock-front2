import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout/Layout'
import FallStockPage from '../features/fallStock/FallStockPage'
import ComparisonPage from '../features/comparison/ComparisonPage'
import DividendListPage from '../features/dividendList/DividendListPage'
import { FALLSTOCK_URL, COMPARE_URL, DIVIDENDLIST_URL } from './url'

const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={FALLSTOCK_URL} element={<FallStockPage />} />
            <Route path={COMPARE_URL} element={<ComparisonPage />} />
            <Route path={DIVIDENDLIST_URL} element={<DividendListPage />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterConfig
