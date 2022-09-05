import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import React from 'react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ErrorBoundary from '../components/ErrorBondary';
import LoadingComponent from '../components/common/Loading/Loading';

const clientSideEmotionCache = createEmotionCache();
export default function MyApp(props) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoading(false), 6000);
    }, []);
    return (
        <>
            {' '}
            {!loading ? (
                <CacheProvider value={emotionCache}>
                    <Head>
                        <meta
                            name="viewport"
                            content="initial-scale=1, width=device-width"
                        />
                        <title>Dislyte Helper</title>
                    </Head>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <UserProvider>
                            <ErrorBoundary>
                                <Component {...pageProps} />
                            </ErrorBoundary>
                        </UserProvider>
                    </ThemeProvider>
                </CacheProvider>
            ) : (
                <CacheProvider value={emotionCache}>
                    <Head>
                        <meta
                            name="viewport"
                            content="initial-scale=1, width=device-width"
                        />
                        <title>Dislyte Helper</title>
                    </Head>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <UserProvider>
                            <ErrorBoundary>
                                <LoadingComponent />
                            </ErrorBoundary>
                        </UserProvider>
                    </ThemeProvider>
                </CacheProvider>
            )}
        </>
    );
}
MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    emotionCache: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    pageProps: PropTypes.object.isRequired,
};
