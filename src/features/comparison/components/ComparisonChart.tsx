import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Scatter } from 'react-chartjs-2'
import { ComparisonStockInfo } from '../type/type'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

export const randomColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r},${g},${b})`
}

export type ComparisonChartProps = {
  data: ComparisonStockInfo[]
}

// グラフ用の複数データ生成
export const dataForChart = (stockDatas: ComparisonStockInfo[] | undefined) =>
  stockDatas != null
    ? stockDatas.map((stockData) => {
        const color = randomColor()
        return {
          label: stockData.name,
          data: [{ x: stockData.per, y: stockData.dividendYield }],
          borderColor: color,
          backgroundColor: color,
          pointRadius: 16,
        }
      })
    : []

const ComparisonChart = (props: ComparisonChartProps) => {
  const { data } = props

  const chartData = {
    datasets: dataForChart(data),
  }
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '配当利回り',
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'PER(予想)',
        },
      },
    },
  }

  return <Scatter width={730} height={250} data={chartData} options={options} />
}

export default ComparisonChart
