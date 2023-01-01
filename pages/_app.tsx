import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme/theme'
import { Navbar, Socials } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Thales Maia </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />

        <Component {...pageProps} />
        <Socials />
      </ThemeProvider>
    </>
  )
}

export default MyApp
