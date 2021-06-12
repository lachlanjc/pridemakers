import Head from 'next/head'
import Link from 'next/link'
import Recommender from '../components/recommender'

function Home() {
  return (
    <article style={{ textAlign: 'center', paddingTop: '2rem' }}>
      <Head>
        <title>LGBTQTV</title>
      </Head>
      <h1>Lachlan’s LGBTQTV</h1>
      <p>My favorite queer TV shows.</p>
      <Recommender />
      <p>Built by <a href="https://lachlanjc.com">@lachlanjc</a> 🌈</p>
    </article>
  )
}

export default Home
