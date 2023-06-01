import {Box, CircularProgress} from '@/components/clientMui'
export default function Loading() {
  return( 
    <Box sx={{ display: 'grid', height:'100vh', background:'black', opacity:'75%', placeItems:'center' }}>
      <CircularProgress />
    </Box>
  )
}