import {Grid} from "../../components/MuiClientSide";
import ProductCard from "../../components/ProductCard";

async function getProducts(){
  const res = await fetch('https://dummyapi.online/api/products'); 
  return res.json()
}

export default async function Products(){
  const products = await getProducts();
  return (
    <p>
      This is Products Component
      <Grid container>
        {products.map((_:any) => <ProductCard key={_.id} product={_} />)}
      </Grid>
    </p>
    )

}