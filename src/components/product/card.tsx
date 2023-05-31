'use client';
import { Product } from "@/types";
import { Box, ImageListItem, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from 'next/link'

type Props = {
  product:Product
}

export default function ProductCard({product}:Props){
  const theme = useTheme();
  return (
    <Box sx={{
      backgroundColor: 'white',
      border:`1px solid ${theme.palette.primary.main}`,
      borderRadius: 1.5,
      width:'fit-content',
      padding: 1,
      '&:hover': {
        boxShadow: 5,
      },
    }}
    >
      <ImageListItem key={product.id}>
        <Image src={product.image} alt={product.name} width={275} height={275} style={{objectFit:'cover'}} />
        <Link href={`products/${product.id}`} style={{textDecoration:'none', cursor:'pointer'}}>
          <Typography variant="h5" sx={{ color: 'primary.main', margin:0.3 }}>
            {product.name}
          </Typography>
        </Link>
        <Typography variant="body1" margin={0.3}>
          {product.description}
        </Typography>
      </ImageListItem>
    </Box>
  )
}