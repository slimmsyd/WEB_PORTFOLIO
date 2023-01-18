import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
return (
  <>
       <Head>
        <title>Sydney Sanders Dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="../public/assets/SYDNEY.png"/>
   <Component {...pageProps} />

      </Head>
  </>
)
}

export default MyApp
