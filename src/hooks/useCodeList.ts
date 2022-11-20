import React, { useState } from 'react';

/**
 * 銘柄コードのリスト
 * @param props 初期値として渡すnumber配列
 * @returns
 */
const useCodeList = (numberList: number[]) => {
  const [codeList, setCodeList] = useState<Set<number>>(new Set(numberList));
  // 銘柄コードリスト追加
  const addCodeList = (input: number) => {
    if (!input) return;
    setCodeList(new Set([...Array.from(codeList), input]));
  };
  const removeCodeList = (input: number) => {
    setCodeList((prevCodeList) =>
      input && prevCodeList.delete(input) ? new Set(prevCodeList) : codeList,
    );
  };
  return [codeList, addCodeList, removeCodeList] as const;
};

export default useCodeList;
