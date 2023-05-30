'use clinet';

import { Grid } from "@mui/material"

export default function GridContainer({children}:any){
  return <Grid container>
    {children}
  </Grid>
}