import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useState } from 'react'

export default function App(props) {
    const { Component, pageProps } = props
    const [colorScheme, setColorScheme] = useState('light')
    const toggleColorScheme = value =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        /** Put your mantine theme override here */
                        fontFamily: 'Rubik, sans-serif',
                        fontFamilyMonospace: 'Monaco, Courier, monospace',
                        headings: { fontFamily: 'Rubik, sans-serif' },
                        colorScheme,
                    }}>
                    <Component {...pageProps} />
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    )
}
