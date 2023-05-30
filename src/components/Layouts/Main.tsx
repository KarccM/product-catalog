'use clinet'

import { Grid } from "@mui/material"

export default function Main({children}:any){
  return <Grid item md={10} xs={12} sx={{
    height:'100vh',
    borderLeft: '1px solid',
    paddingLeft: 1
  }}>
    {children}
  </Grid>
}