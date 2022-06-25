import {
    useState,
    useEffect
} from "react";
import Head from 'next/head'

import Layout, { siteTitle } from '../../components/Layout'


export default function Character() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:9000/character')
            .then((res) => res.json())
            .then((data) => {
                setData(data.characters)
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
            <ul>
                <li></li>
            </ul>
            {data.name.map(character => <div>{ character }</div> ) }
        </Layout>
        // <div>
        //     <Navbar />
            
            /*{ {data.name.map((character, index) =>
                <ul>
                    <li>{index + 1}</li>
                    <li>{character}</li>
                </ul>
            )} }*/
        //  </div>  
    )
}