
import {Grid, Stack, Typography} from '@/components/clientMui';
import { Product } from "@/types";
import Image from 'next/image';

async function getProduct(params:number) : Promise<ProductOne> 
{
  let product = await fetch(`https://dummyapi.online/api/products/${params}`);
  return product.json()
}

interface ProductOne extends Product {
  price:number
}

export default async function Page({params}:any){
  let product:ProductOne = await getProduct(params.id);
  
  return (
    <Grid container >
      <Grid item sm={12} md={6}>
        <Image src={product.image} alt={product.name} width={400} height={400} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Stack gap={1}>
          <Typography variant='h3' sx={{borderBottom:'1px solid #e8e8e8', paddingY:2}}>
            {product.name}
          </Typography>
          <Typography variant='body1'>
            price : <span style={{color:'red'}}>{product.price}</span>
          </Typography>
          <Typography variant='body1'>
            {product.description}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}