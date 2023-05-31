import {Grid} from "@/components/clientMui";
import ProductCard from "@/components/product/card";
import { Product } from "@/types";

async function getProducts(){
  const res = await fetch('https://dummyapi.online/api/products', { cache: 'no-store'}); 
  return res.json()
}

export default async function Products(){
  const products: Product[] = await getProducts();
  return (
      <Grid container spacing={3} justifyContent={'center'}>
        {products.map((product:Product) => (
          <Grid item xs={12} sm={6} lg={3}  key={product.id} margin={2} >
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    )
}