'use clinet'
import { Grid } from "@/components/clientMui"

export default function Main({children}:any){
  return <Grid item md={10} xs={12} sx={{
    height:'100vh',
    borderLeft: '1px dashed',
    overflow: 'auto',
    backgroundColor:'secondary.main'
  }}>
    {children}
  </Grid>
}