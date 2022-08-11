import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material/styles";
import Head from 'next/head';
// import { theme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Head>
        <title> Thales Maia </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <ThemeProvider theme={theme}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
     
    </>
    
  )
}

export default MyApp
