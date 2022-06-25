import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
        <Head>
          <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
}
