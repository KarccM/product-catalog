"use client"
import React from 'react';

const useInfinteScrollClientSideData = (data:any, size:undefined|number) => {

  
  const [page, _] = React.useState<any>(data);
  const [index, setIndex] = React.useState<number>(0);
  const [pageSize, setPageSize] = React.useState<number>(size ?? 10);
  const [totalDataLength, __] = React.useState<number>(data.length ?? 0);
  const [hasmore, setHasmore] = React.useState<boolean>(false);
  const [start, setStart] = React.useState<number>(0);
  const [end, setEnd] = React.useState<number>(data.length ?? 0);
  
  function nextPage(): void
  {
    setIndex(prev => ++prev);
    setStart(index*pageSize);
    setEnd(calculateEnd());
    setHasmore(checkIfHasMore());
  }
  function prevPage(): void
  {
    setIndex(prev => --prev);
    setStart(index*pageSize);
    setEnd(calculateEnd());
    setHasmore(checkIfHasMore());
  }
  function checkIfHasMore(): boolean
  {
    return totalDataLength > end;
  }
  function calculateEnd(): number
  {
    return (index*pageSize + pageSize) > totalDataLength ? totalDataLength: (index*pageSize + pageSize)
  }

  function log():void
  {
    console.log('page', page);
    console.log('index', index);
    console.log('pageSize', pageSize);
    console.log('totalDataLength', totalDataLength);
    console.log('hasmore', hasmore);
    console.log('start', start);
    console.log('end', end);
  }

  return {
    nextPage,
    prevPage,
    setPageSize,
    data: page.slice(start, end),
    hasmore,
    log,
    checkIfHasMore,
  }

}

export default useInfinteScrollClientSideData;
