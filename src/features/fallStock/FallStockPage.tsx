import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import FallStock from './components/FallStock'
// import FallStock, { FallStockProps } from 'components/FallStock';
// import DownloadExcelButton from 'components/DownloadExcelButton';
// import axios, { AxiosError, AxiosResponse } from 'axios';
// import useSWR from 'swr';

// interface FallStockGetResponse extends AxiosResponse {
//   data: FallStockProps[];
// }

// const fetcher = (url: string) =>
//   axios.get<FallStockProps, FallStockGetResponse>(url).then((res) => res.data);

const styles = css({
  width: '60vw',
  height: '100%',
  margin: '0 auto',
  fontSize: '30px',
  border: '1px solid black',

  'tr th': {
    fontWeight: 'bold',
    background: '#fff5e5',
    border: '1px double black',
  },
})

const FallStockPage = () => {
  // カスタムフック作る
  // const [pageIndex, setPageIndex] = useState(1)
  // react-queryへ変更する. api.tsに切り出す
  //   const { data } = useSWR(`http://127.0.0.1:5000/${pageIndex}`, fetcher);

  return <FallStock />
}

export default FallStockPage
