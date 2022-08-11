import React, {
    useState,
    useEffect
} from "react";
import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';
import Layout, { siteTitle } from '../../components/Layout'
import LoadingSpinner from "../../components/Loading";
import AdminCustom from "../../components/AdminCustom";

export async function getStaticProps() {
    const [esperRes, reliqueRes] = await Promise.all([
        fetch("http://localhost:8080/espers"), 
        fetch("http://localhost:8080/reliques")
      ]);
    const [espers, reliques] = await Promise.all([
    esperRes.json(), 
    reliqueRes.json()
    ]);
    return { props: { espers, reliques } };
}

export default function Admin({espers, reliques}) {
    const { user, error } = useUser();
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
                <AdminCustom data={{ espers, reliques }}/>
            </Layout>
        )
    }
}