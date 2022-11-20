import { useState, useRef } from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import { ComparisonStockInfo } from './type/type'
import useCodeList from '../../hooks/useCodeList'
import { StockInfoStore } from '../../hooks/useStockInfoStore'
import ComparisonStock from './components/ComparisonStock'

// チャートコンポーネントに渡す用の値管理
// キーのcodeは銘柄コード
export type StocksInfoForChartStore = StockInfoStore<ComparisonStockInfo>

const styles = css({
  width: '60%',
  height: '100%',
  margin: '0 auto',
  fontSize: '30px',
  border: '1px solid black',
  // nth-childだとemotionのwariningが出る
  'tr:nth-of-type(odd)': {
    backgroundColor: 'rgb(255, 255, 128)',
  },
  'tr th': {
    fontWeight: 'bold',
    background: '#fff5e5',
    border: '1px double black',
  },
})

// @TODO:react-queryへstoreを変更する
const ComparisonPage = () => {
  // リスト表示・グラフ切替
  const [isChart, setIsChart] = useState(false)
  // 銘柄コードリスト
  const [codeList, addCodeList, removeCodeList] = useCodeList([
    8316, 8306, 8473,
  ])
  // 銘柄コードinput
  const inputRef = useRef<HTMLInputElement>(null)

  const addCode = () => {
    if (inputRef.current != null) {
      addCodeList(parseInt(inputRef.current.value, 10))
    }
  }

  return (
    <>
      <Link to="/">トップへ</Link>

      <ComparisonStock codeList={codeList} isChart={isChart} />
      <div>
        <input ref={inputRef} type="number" />
        <button type="button" onClick={addCode}>
          株追加
        </button>
      </div>

      <button type="button" onClick={() => setIsChart(!isChart)}>
        表示切替
      </button>
    </>
  )
}

export default ComparisonPage
