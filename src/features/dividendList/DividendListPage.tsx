/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/prop-types */
import {
  useState,
  useEffect,
  useReducer,
  useRef,
  useMemo,
  useCallback,
} from 'react'

import {
  Column,
  Table,
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  RowData,
} from '@tanstack/react-table'

import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  IconButton,
  Box,
} from '@chakra-ui/react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@chakra-ui/icons'

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void
  }
}

type DividendData = {
  stockName: string
  income: number
  dividendDate: string
}

type Props = {}

const defaultColumn: Partial<ColumnDef<DividendData>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue()
    // We need to keep and update the state of the cell normally
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<any>(initialValue)

    // When the input is blurred, we'll call our table meta's updateData function
    const onBlur = () => {
      table.options.meta?.updateData(index, id, value)
    }

    // If the initialValue is changed external, sync it up with our state
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    return (
      <input
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
    )
  },
}

const Filter = ({
  column,
  table,
}: {
  column: Column<any, any>
  table: Table<any>
}) => {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === 'number' ? (
    <div className="flex space-x-2">
      <Input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <Input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <Input
      type="text"
      value={(columnFilterValue ?? '') as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-36 border shadow rounded"
    />
  )
}

// paging?????????????????????
const useSkipper = () => {
  const shouldSkipRef = useRef(true)
  const shouldSkip = shouldSkipRef.current

  // Wrap a function with this to skip a pagination reset temporarily
  const skip = useCallback(() => {
    shouldSkipRef.current = false
  }, [])

  useEffect(() => {
    shouldSkipRef.current = true
  })

  return [shouldSkip, skip] as const
}

const DividendListPage = (props: Props) => {
  const rerender = useReducer(() => ({}), {})[1]

  // ???????????????
  const columns = useMemo<Array<ColumnDef<DividendData>>>(
    () => [
      {
        header: '????????????????????????',
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: 'stockName',
            header: () => <span>??????</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: 'dividendDate',
            header: () => <span>???????????????</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: 'income',
            header: () => <span>?????????</span>,
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
    [],
  )
  // ????????????????????????????????????????????????????????????
  const [data, setData] = useState<DividendData[]>([
    { stockName: 'aaa', dividendDate: '2022-05', income: 10000 },
    { stockName: '?????????', dividendDate: '2022-06', income: 9000 },
  ])

  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper()

  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex,
    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex: number, columnId: string, value: unknown) => {
        // Skip age index reset until after next rerender
        skipAutoResetPageIndex()
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                ...old[rowIndex]!,
                [columnId]: value,
              }
            }
            return row
          }),
        )
      },
    },
    debugTable: true,
  })
  return (
    <div className="p-2">
      <div className="h-2" />
      <ChakraTable>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </Th>
                )
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
      </ChakraTable>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <Box>
          <IconButton
            // className="border rounded p-1"
            onClick={() => table.setPageIndex(0)}
            // disabled={!table.getCanPreviousPage()}
            aria-label="jumpFirst"
            icon={<ArrowLeftIcon />}
          />

          <IconButton
            // className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            aria-label="back1"
            icon={<ChevronLeftIcon />}
          />

          <IconButton
            // className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            aria-label="next1"
            icon={<ChevronRightIcon />}
          />

          <IconButton
            // className="border rounded p-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            aria-label="jumpFinish"
            icon={<ArrowRightIcon />}
          />
        </Box>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[1, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
    </div>
  )
}

export default DividendListPage
