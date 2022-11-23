import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import qs from 'qs'

// import { ComparisonStockInfo } from './type/type'

const url = 'http://localhost:5000'

// hookのuseQueryを作る

/**
 * 配当記録取得メソッド
 * @returns data {@link ComparisonStockInfo}
 */
// export const fetchDividend = async (codeList: number[]) => {
//   const options: AxiosRequestConfig = {
//     url: `${url}/dividend`,
//     method: 'GET',
//     params: { code: codeList },
//     // codeのパラム名で複数送るための整形
//     paramsSerializer: {
//       serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
//     },
//   }
//   const data = await axios(options)
//     .then((res: AxiosResponse<ComparisonStockInfo[]>) => res.data)
//     .catch((e: AxiosError<{ error: string }>) => {
//       console.log(`比較データ取得でエラーが発生しました：${e.message}`)
//       throw e
//     })
//   console.log(data)
//   return data
// }
