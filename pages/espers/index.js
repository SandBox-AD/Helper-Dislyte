import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';
import { Alert } from '@mui/material';
import Layout, { siteTitle } from '../../components/Layout';
import CardGrid from '../../components/CardGrid';

export default function Character() {
  const [data, setData] = useState(null);
  const { user, error } = useUser();
  function callApi() {
    setData();
    fetch('http://localhost:8080/api/esper', {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then((esper) => {
        setData(esper.data);
      });
  }
  useEffect(() => {
    callApi();
  }, []);

  if (!data)
    return (
      <Layout>
        <p> No character data </p>
      </Layout>
    );
  if (!user)
    return (
      <Layout >
        <Alert severity="info">
          Vous n&apos;êtez pas connecté impossible de charger des données lier à
          un compte sur le site
        </Alert>
        <CardGrid Card data={data} />
      </Layout>
    );
  if (error)
    return (
      <Layout characters>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div>{error.message}</div>
      </Layout>
    );
  if (user) {
    return (
      user && (
        <Layout>
          <CardGrid Card data={data} />
        </Layout>
      )
    );
  }
}
