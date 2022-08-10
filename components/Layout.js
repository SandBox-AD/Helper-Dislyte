import Head from 'next/head';
import styles from './css/layout.module.css';
import Navbar from '../components/Navbar'

export const siteTitle = 'Dislyte Helper';

export default function Layout({ children, user }) {
  return (
    <div>
      <Navbar user={user}/>
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