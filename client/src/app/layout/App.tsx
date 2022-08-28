import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import Catalog from '../../features/catalog/Catalog';
import Header from './Header'

export default function App() {
  const [mode, setMode] = useState(true)
  const displayMode =  mode ? 'light':  'dark'

  const darkTheme = createTheme({
    palette: {
      mode: displayMode
    },
  });

  const handleMode=()=>setMode(!mode)

  return (
    <>
     <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header handleMode={handleMode}/>
      <Container>
        <Catalog/>
      </Container>
    </ThemeProvider>
    </>
  )
}
