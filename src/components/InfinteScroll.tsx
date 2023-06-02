'use client'

import useInfinteScrollClientSideData from "@/hooks/useInfinteScrollClientSideData"
import ErrorBoundary from "./clientError"
import React from "react"
import { Box } from "@mui/material"

interface Props {
  data: any,
  getCompnent: (entity:any) => React.ReactNode,
}

export default function InfiniteScroll({data, getCompnent}:Props){
  const [index, setIndex] = React.useState<number>(1);
  let {data:page, hasmore, nextPage} = useInfinteScrollClientSideData(data,2,index)
  const observer = React.useRef<IntersectionObserver>()
  const lastEntity = React.useCallback(
    (node:any) => {
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0]?.isIntersecting && hasmore) {
          setIndex(prev => prev + 1)
          nextPage()
        }
      })
      if (node) observer.current.observe(node)
    },[page])

  return (
      <ErrorBoundary>
        <p>infinte scroll component</p> 
        {page.map((entity:any,index:number) => {
          if(index < entity.length -1)
            return <>{getCompnent(entity)}</>
          else 
            return <Box ref={lastEntity}>
              {getCompnent(entity)}
            </Box>
          
          })}
      </ErrorBoundary> 
  )
}