import Head from 'next/head';
import PropTypes from 'prop-types';
import styles from './css/layout.module.css';
import Navbar from './Navbar';

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

Layout.propTypes = {
    children: PropTypes.element,
};
Layout.defaultProps = {
    children: null,
};
