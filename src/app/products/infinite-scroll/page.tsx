'use client'
import InfiniteScroll from '@/components/InfinteScroll';
import ProductCard from '@/components/product/card';
import { Product } from '@/types/index';
import ProductsData from '../../../dummyData/products.json'
interface Props {
  products : Product[]
}

async function getProducts(){
  try {
    const res = await fetch('https://dummyapi.online/api/products', { cache: 'no-store'}); 
    return res.json()
  } catch(e) {}
}  

export default async function ProductInfinteScroll(props:Props){
  // const products: Product[] = await getProducts();

  function productCardComp(entity:Product){
    return (
      <>
        <ProductCard product={entity} />
      </>
    )
  }
  
  return (
    <InfiniteScroll data={ProductsData} getCompnent={productCardComp} />
  )
}