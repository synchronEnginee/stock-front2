import React, { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

/**
 * ChakraUIのスタイルプロバイダー
 * @param children 子コンポーネント
 */
const ChakraStyleProvider = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraStyleProvider;
