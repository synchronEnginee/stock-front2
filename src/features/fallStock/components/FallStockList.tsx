import {
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react'
import React from 'react'

import { FallStockInfo } from '../type'

type FallStockListProps = {
  stockData: FallStockInfo[]
}

const FallStockList = (props: FallStockListProps) => {
  const { stockData } = props
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>下落率ランキング</TableCaption>
        <Thead>
          <Tr>
            <Th>銘柄</Th>
            <Th isNumeric>単価</Th>
            <Th isNumeric>下落率</Th>
            <Th isNumeric>目標株価</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stockData.map((stock) => (
            <Tr key={stock.code}>
              <Td>{stock.name}</Td>
              <Td isNumeric>{stock.price}</Td>
              <Td isNumeric>{stock.fallStock}</Td>
              <Td isNumeric>{stock.stockTargetPrice}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default FallStockList
