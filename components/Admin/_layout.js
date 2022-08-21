import Head from 'next/head'
import Navbar from './Navbar'
import { Grid, Container, Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
export const siteTitleAdmin = 'Dislyte Helper - Administration'
const mdTheme = createTheme()
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Container>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="og:title" content={siteTitleAdmin} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs>
              {children}
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
