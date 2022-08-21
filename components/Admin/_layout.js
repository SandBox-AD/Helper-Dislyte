import Head from 'next/head';
import Navbar from './Navbar';
import { Grid } from '@mui/material'

export const siteTitleAdmin = 'Dislyte Helper - Administration'

export default function Layout({ children }) {
  return (
    <Grid container spacing={2} alignItems='stretch'>
      <Grid item xs>
        <Navbar/>
      </Grid>
      <Grid item xs={4}>
        {children}
      </Grid>
    </Grid>
  )
}
