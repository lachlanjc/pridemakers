import React from 'react'
import Head from 'next/head'
import Rainbow from '../components/rainbow'
import '../style.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />
      </Head>
      <Rainbow />
      <Component {...pageProps} />
    </>
  )
}

export default App
