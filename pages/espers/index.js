import React, {
    useState,
    useEffect
} from "react";
import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';
import Layout, { siteTitle } from '../../components/Layout'
// import Table from "../../components/Table"
import Alert from "../../components/AlertCustom";
import CardGrid from "../../components/CardGrid";
import LoadingSpinner from "../../components/Loading";


export default function Character() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const { user, error } = useUser();
    function callApi() {
        setLoading(true)
        setData();
        fetch('http://localhost:8080/api/espers', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setData(data.espers);
            setLoading(false);
        })
    }
    useEffect(() => {
        callApi()
    }, [])
    
    if (isLoading) return (
        <Layout characters>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <LoadingSpinner/>
        </Layout>)


    if (!data) return (
        <Layout characters>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <p> No character data </p>
        </Layout>)
    if (!user) return (
        <Layout characters>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Alert children={<p> Vous n'êtez pas connecté impossible de charger des données lier à un compte sur le site </p>} type='error' />
            <CardGrid Card data={data}/>
        </Layout>) 
    if (error) return (
        <Layout characters >
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>{error.message}</div>
        </Layout>)  
    if (user) {
        return user && (
            <Layout characters user={user}>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <CardGrid Card data={data}/>
            </Layout>
        )
    }
}