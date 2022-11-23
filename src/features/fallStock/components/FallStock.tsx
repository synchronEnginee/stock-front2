import { fetchFallStock } from '../api'
import { useQuery } from 'react-query'

import FallStockList from './FallStockList'

type FallStockProps = {
  codeList: Set<number>
}

/**
 * 銘柄コードリストとチャート表示フラグを受け取り、
 * バックエンドからデータを取得後にリストorチャートで表示する
 * @param props {@link FallStockProps} -銘柄コードリスト,チャート表示フラグ
 */
const FallStock = () => {
  const fallStockFetch = async () => await fetchFallStock(1)
  const { data } = useQuery(['DividendListInfo', 1], fallStockFetch)
  // データがない場合は早期リターン
  if (data == null) return null

  return <FallStockList stockData={data} />
}

export default FallStock
