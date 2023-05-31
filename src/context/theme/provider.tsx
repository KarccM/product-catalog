'use clinet'
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3A98B9',
      dark: '#27374D'
    },
    secondary: {
      main: '#FFF',
      dark: '#526D82'
    },
  },
});

export default function App({children}:any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}