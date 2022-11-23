import { useMemo } from 'react'

// import { fetchDividend } from '../api'
// import { useQuery } from 'react-query'
// import DividendL from './DividendStock'

// type DividendProps = {
//   codeList: Set<number>
// }

// /**
//  * 銘柄コードリストとチャート表示フラグを受け取り、
//  * バックエンドからデータを取得後にリストorチャートで表示する
//  * @param props {@link ComparisonChartProps} -銘柄コードリスト,チャート表示フラグ
//  */
// const DividendStock = (props: DividendProps) => {
//   const { codeList } = props
//   const codeListArray = useMemo(() => Array.from(codeList), [codeList])
//   const dividendFetch = async () => await fetchDividend(codeListArray)
//   const { data } = useQuery(['DividendListInfo', codeListArray], dividendFetch)
//   // データがない場合は早期リターン
//   if (data == null) return null

//   return
//     <DividendList stockData={data} />
// }

// export default DividendStock
