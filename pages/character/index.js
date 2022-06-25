import {
    useState,
    useEffect
} from "react";
import Head from 'next/head'

import Layout, { siteTitle } from '../../components/Layout'
import Table from "../../components/Table"


export default function Character() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [picture, setPicture] = useState(null)
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:9000/character')
            .then((res) => res.json())
            .then((data) => {
                setData(data.characters)
                setLoading(false)
            })
        fetch('http://localhost:9000/picture/esper')
        .then((res) => res.json())
        .then((picture) => {
            setPicture(picture)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p> Loading... </p>
    if (!data) return <p> No character data </p>
    return (
        <Layout characters>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Table test data={data} picture={ picture} />
        </Layout>
    )
}