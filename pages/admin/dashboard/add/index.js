// Import perso
import { Box, Toolbar, Container } from '@mui/material';
import Dashboard from '../../../../components/Admin/Dashboard';
import Layout from '../../../../components/Admin/_layout';
import loadRelique from '../../../../lib/loadReliques';
import loadEsper from '../../../../lib/loadEsper';
import loadSets from '../../../../lib/loadSet';

export async function getStaticProps() {
  const espers = await loadEsper();
  const reliques = await loadRelique();
  const set = await loadSets();

  return { props: { espers, reliques, set } };
}

export default function Admin(props) {
  return (
    <Layout>
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
          <Dashboard data={props}/>
        </Container>
      </Box>
    </Layout>
  );
}
