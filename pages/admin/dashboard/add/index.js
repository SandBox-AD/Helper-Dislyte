import React, { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
//Import perso
import Dashboard from '../../../../components/Admin/Dashboard'
import Layout from '../../../../components/Admin/_layout'
import { Box, Toolbar, Container } from '@mui/material'
import Error from '../../../../components/common/AlertCommon/AlertCommon'
import loadRelique from '../../../../lib/loadReliques'
import loadEsper from '../../../../lib/loadEsper'
import loadSets from '../../../../lib/loadSet'


export async function getStaticProps() {
  const espers = await loadEsper()
  const reliques = await loadRelique()
  const set = await loadSets()

  return { props: { espers, reliques, set } }
}

export default function Admin({ espers, reliques, set }) {
  const { user, error } = useUser()
  console.log(set)
  // if (!user)
  //   return (
  //     <Layout children={<Error severity={'error'} msg={error} />}>
  //     </Layout>
  //   );
  return (
    user && (
      <Layout
        children={
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container
              maxWidth="lg"
              sx={{
                mt: 4,
                mb: 4,
              }}
            >
              <Dashboard data={{ espers, reliques, set }} user={user} />
            </Container>
          </Box>
        }
      />
    )
  )
}
