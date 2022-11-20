import { useCallback, useRef } from 'react';

// useRefをstoreで扱う対象の型. 株情報のプロパティは自由
export type StockInfoStore<T extends object> = {
  [key: string]: T;
};

// storeの操作関数のUnion型
export type OperateStockInfoStore<T extends object> = {
  [key: string]:
    | ((code: string, stockInfo: T) => void)
    | ((code: string) => void);
};

/**
 * 再レンダリングさせない値管理.
 * 株の詳細ステータスをTで渡し、keyは証券コード.
 *
 * @returns
 * stockInfoStore: StocksInfoStore<T extends object>,
 * addStockInfoStore: (code: string, stockInfo: T) => void
 */
const useStockInfoStore = <T extends object>() => {
  const stockInfoStore = useRef<StockInfoStore<T>>({}).current;
  const addStockInfoStore = useCallback(
    (code: string, stockInfo: T) => {
      stockInfoStore[code] = stockInfo;
    },
    [stockInfoStore],
  );
  return [stockInfoStore, { addStockInfoStore }] as const;
};

export default useStockInfoStore;
