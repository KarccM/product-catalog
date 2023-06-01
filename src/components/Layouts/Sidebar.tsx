'use clinet';

import { Grid } from "@mui/material";

export default function Sidebar(){
  return <>
    <Grid item md={2} sx={{ 
      display:{
          xs: 'none',
          md: 'block'
      }
      }} height={'100 vh'}>
      Products
      <div>2</div>
      <div>1</div>
      <div>2</div>
      <div>1</div>
      <div>2</div>
      <div>1</div>
      <div>2</div>
    </Grid>
  </>
}