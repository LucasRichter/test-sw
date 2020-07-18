import Axios from 'axios'

export default async params => {
  const { data: { next, results } } = await Axios.get('starships', { params })
  return {
    hasMore: !!next,
    starships: results
  }
}
