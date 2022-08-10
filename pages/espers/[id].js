import React, {
    useState,
    useEffect
} from "react";
import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';
import Layout, { siteTitle } from '../../components/Layout';
import { Alert, AlertTitle, IconButton, Collapse } from "@mui/material";
import AlertCustom from "../../components/AlertCustom";
import ListCustom from "../../components/ListCustom";
import CloseIcon from '@mui/icons-material/Close';

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:8080/espers/')
    const espers = await res.json()
    const paths = espers['data'].map((esper) => ({
        params: { id: esper.id.toString() },
    }))
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    let url = "http://localhost:8080/esper/"+params.id
    const res = await fetch(url)
    const esper = await res.json()
    return { props: { esper } }
}

export default function Esper({esper}) {
    const { user, error } = useUser();
    const [open, setOpen] = useState(true);
    console.log(esper)
    if (error) return (
        <Layout characters >
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>{error.message}</div>
        </Layout>)
    if (esper.length === 0) return (
        <Layout>
            <Head>{siteTitle}</Head>
            <AlertCustom children={<p> Pas de donnée pour l'esper </p>} type='error' />
        </Layout>
        
    )
    if (user) {
        return user && (
            <Layout characters user={user}>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <ul>
                    {esper.map((esper) => (
                        <li>{esper.esper}</li>
                    ))}
                </ul>
            </Layout>
        )
    }
    if (!user) return (
        <Layout characters>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Collapse in={open}>
                <Alert severity="info"
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}>
                    <AlertTitle>Info</AlertTitle>
                    Si vous n'êtez pas connecté impossible de charger des données liées à un compte sur le site
                </Alert>
            </Collapse>
            <ListCustom data={esper}/>
        </Layout>) 
}