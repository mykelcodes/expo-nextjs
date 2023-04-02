import { AppQueryProvider } from '@lib/query'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <AppQueryProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </AppQueryProvider>
    )
}
