'use client';

import { Grid, ImageListItem, ImageListItemBar } from "@mui/material";
import Image from "next/image";

 

interface Product {
  product:{
    id: number,
    name: string,
    image: string,
    description: string
  }
}

export default function ProductCard({product}:Product){
  return <Grid item xl={3} md={6} xs={12}>
        <ImageListItem key={product.id}>
        <Image src={product.image} alt={product.name} width={100} height={100}/>
        <ImageListItemBar
          title={product.name}
          subtitle={<span>by: {product.description}</span>}
          position="below"
          />
    </ImageListItem>
  </Grid>
}