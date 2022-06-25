import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar'

const name = 'Creep';
export const siteTitle = 'Dislyte Helper';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      </div>
    </div>
  );
}