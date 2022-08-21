import Head from 'next/head'
import Navbar from './Navbar'
import theme from '../../src/theme';
import { Grid, Container, Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
export const siteTitleAdmin = 'Dislyte Helper - Administration'
const mdTheme = theme
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        {children}
      </Box>
    </ThemeProvider>
  )
}
