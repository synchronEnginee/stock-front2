import React, { createContext, ReactNode } from 'react';
import { StockInfoStore, OperateStockInfoStore } from './useStockInfoStore';

// storeのプロバイダー
export const StockInfoContext = createContext({});

// storeを操作するプロバイダー
export const OperateStockInfoContext = createContext({});
// Propsの型定義
type StockInfoStoreProviderProps<T extends object> = {
  children: ReactNode;
  store: StockInfoStore<T>;
  operateStore: OperateStockInfoStore<T>;
};

/**
 * stockInfoのcontextProvider
 * 子コンポーネント、共有したいstore、storeを操作する関数を渡す
 * @param props {@link StockInfoStoreProviderProps}
 * @returns
 */
const StockInfoStoreProvider = <T extends object>(
  props: StockInfoStoreProviderProps<T>,
) => {
  const { children, store, operateStore } = props;
  return (
    <StockInfoContext.Provider value={store}>
      <OperateStockInfoContext.Provider value={operateStore}>
        {children}
      </OperateStockInfoContext.Provider>
    </StockInfoContext.Provider>
  );
};

export default StockInfoStoreProvider;
