'use client';
import {Grid} from "@/components/clientMui";
import Main from "../components/layouts/main";
import Sidebar from "../components/layouts/sidebar";
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@/context/theme/provider'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body >        
        <ThemeProvider>
          <CssBaseline />
          <Grid container>
            <Sidebar />
            <Main>
              {children}
            </Main>
          </Grid>
        </ThemeProvider>
        </body>
    </html>
  )
}
