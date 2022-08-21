import React, { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
//Import perso
import Dashboard from '../../../../components/Admin/Dashboard'
import Navbar from '../../../../components/Admin/Navbar'

export async function getStaticProps() {
  const [esperRes, reliqueRes] = await Promise.all([
    fetch('http://localhost:8080/api/esper'),
    fetch('http://localhost:8080/api/relique'),
  ])
  const [espers, reliques] = await Promise.all([
    esperRes.json(),
    reliqueRes.json(),
  ])
  return { props: { espers, reliques } }
}

export default function Admin({ espers, reliques }) {
  const { user, error } = useUser()
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }
  return (
    user && (
        <Navbar/>
    //   <Box
    //     component="main"
    //     sx={{
    //       backgroundColor: (theme) =>
    //         theme.palette.mode === 'light'
    //           ? theme.palette.grey[100]
    //           : theme.palette.grey[900],
    //       flexGrow: 1,
    //       height: '100vh',
    //       overflow: 'auto',
    //     }}
    //   >
    //     <Toolbar />
    //     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    //       <Dashboard data={{ espers, reliques }} user={user} />
    //     </Container>
    //   </Box>
    )
  )
}
