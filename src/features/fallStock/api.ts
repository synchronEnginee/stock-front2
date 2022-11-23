import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

import { FallStockInfo } from './type'

const url = 'http://localhost:5000'

/**
 * 下落率ランキング取得メソッド
 * @returns data {@link FallStockInfo}
 */
export const fetchFallStock = async (pageNumber: number) => {
  console.log('fallstockのフェッチ')
  const options: AxiosRequestConfig = {
    url: `${url}/fallstock/${pageNumber.toString()}`,
    method: 'GET',
  }
  const data = await axios(options)
    .then((res: AxiosResponse<FallStockInfo[]>) => res.data)
    .catch((e: AxiosError<{ error: string }>) => {
      console.log(`下落率ランキング取得でエラーが発生しました：${e.message}`)
      throw e
    })
  console.log(data)
  return data
}
