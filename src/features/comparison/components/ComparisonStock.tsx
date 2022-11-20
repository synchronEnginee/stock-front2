import { useMemo } from 'react'

import { fetchComparison } from '../api'
import { useQuery } from 'react-query'
import ComparisonChart from './ComparisonChart'
import ComparisonList from './ComparisonList'

type ComparisonProps = {
  codeList: Set<number>
  isChart: boolean
}

/**
 * 銘柄コードリストとチャート表示フラグを受け取り、
 * バックエンドからデータを取得後にリストorチャートで表示する
 * @param props {@link ComparisonChartProps} -銘柄コードリスト,チャート表示フラグ
 */
const ComparisonStock = (props: ComparisonProps) => {
  const { codeList, isChart } = props
  const codeListArray = useMemo(() => Array.from(codeList), [codeList])
  const compareFetch = async () => await fetchComparison(codeListArray)
  const { data } = useQuery(['CompareStockInfo', codeListArray], compareFetch)
  // データがない場合は早期リターン
  if (data == null) return null

  return isChart ? (
    <ComparisonChart data={data} />
  ) : (
    <ComparisonList stockData={data} />
  )
}

export default ComparisonStock
