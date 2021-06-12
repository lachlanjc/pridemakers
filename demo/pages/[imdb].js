import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Recommender from '../components/recommender'
import recommendations from '../recommendations'

function Media({ id, media }) {
  return (
    <main>
      <Head>
        <title>{media['Title']}</title>
      </Head>
      <header>
        <Image
          width={300}
          height={444}
          src={media['Poster']}
          alt={media['Title']}
          objectFit="contain"
          placeholder="blur"
        />
        <div>
          <a href={`https://imdb.com/${id}`} target="_blank" rel="noreferrer">
            <h1>{media['Title']}</h1>
          </a>
          <p>
            {[media['Genre'], media['Language'], media['Released']]
              .filter((data) => data !== 'N/A')
              .join(' – ')}
            {media['type'] === 'series'
              ? ' – ' +
                (media['totalSeasons'] === '1'
                  ? '1 season'
                  : `${media['totalSeasons']} seasons`)
              : null}
          </p>
          <p>Written by {media['Writer']}</p>
          <p>Starring {media['Actors']}</p>
          <p>
            <small>{media['Awards']}</small>
          </p>
        </div>
      </header>
      <blockquote>{media['Plot']}</blockquote>
      {recommendations[id] && (
        <details open>
          <summary>My recommendation</summary>
          {recommendations[id]}
        </details>
      )}
      <Recommender />
      <hr />
      <details>
        <summary>Raw JSON</summary>
        <pre>{JSON.stringify(media, null, 2)}</pre>
      </details>
    </main>
  )
}

function MediaPage({ id, media }) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading…</h1>
  } else if (media?.['Title']) {
    return <Media id={id} media={media} />
  } else {
    return <h1>404</h1>
  }
}

export default MediaPage

export const getStaticPaths = () => {
  const ids = Object.keys(recommendations)
  const paths = ids.map((imdb) => ({ params: { imdb } }))
  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  const { imdb: id } = params
  const media = await fetch(
    `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${process.env.OMDB_API_KEY}`
  ).then((res) => res.json())
  console.log(media)
  return { props: { id, media } }
}
