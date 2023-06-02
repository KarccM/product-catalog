"use client"
import React from 'react';

const useInfinteScrollClientSideData = (data:any, size:undefined|number, index:number) => {

  const fullData = data;
  const [pageSize, setPageSize] = React.useState<number>(size ?? 10);
  const [totalDataLength, _] = React.useState<number>(data?.length ?? 0);
  const [hasmore, setHasmore] = React.useState<boolean>(true);
  const [page, setPage] = React.useState<any>(fullData.slice(0,size));
  
  function nextPage(): void
  {
    let start = index*pageSize
    let end = calculateEnd() 
    setHasmore(checkIfHasMore(end));
    setPage((prev:any) => [...prev,...fullData.slice(start,end)])
  }
  function checkIfHasMore(end:number): boolean
  {
    return totalDataLength > end;
  }
  function calculateEnd(): number
  {
    return (index*pageSize + pageSize) > totalDataLength ? totalDataLength: (index*pageSize + pageSize)
  }

  return {
    nextPage,
    setPageSize,
    data: page,
    hasmore,
    checkIfHasMore,
  }

}

export default useInfinteScrollClientSideData;
