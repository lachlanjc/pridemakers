import list from '../recommendations'
import { useRouter } from 'next/router'

function Recommender() {
  const ids = Object.keys(list)
  const router = useRouter()
  return (
    <button
      onClick={() => {
        const randomId = ids[Math.floor(Math.random() * ids.length)]
        router.push('/' + randomId)
      }}
    >
      Get a recommendation
    </button>
  )
}

export default Recommender
