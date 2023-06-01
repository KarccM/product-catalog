'use client'

import useInfinteScrollClientSideData from "@/hooks/useInfinteScrollClientSideData"
import ErrorBoundary from "./clientError"
let data = [
  {id:1,name:'1'},
  {id:2,name:'2'},
  {id:3,name:'3'},
  {id:4,name:'4'},
]
export default function InfiniteScroll(){
  let {log} = useInfinteScrollClientSideData(
    data,2
  )
  log()
  return (
      <ErrorBoundary>
        <p>infinte scroll</p> 
      </ErrorBoundary> 
  )
}