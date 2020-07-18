import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CardView from './CardView'
import { Flex, Box } from '@rebass/grid'
import getStarships from '../services/getStarships'
import calculateStops from '../utils/calculateStops'
import Button from './Button'
import Loader from './Loader'

const StarshipList = ({
  distance
}) => {
  const [startships, setStarships] = useState([])
  const [page, setPage] = useState(1)
  const [loadMore, setLoadMore] = useState(false)
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    const effect = async () => {
      setLoading(true)
      const {
        starships,
        hasMore
      } = await getStarships({ page })
      setStarships(s => [...s, ...starships])
      setLoadMore(hasMore)
      setLoading(false)
    }
    effect()
  }, [page])

  return (
    <>
      <Flex
        flexWrap='wrap'
        alignItems='center'
        justifyContent='center'
        mx='-10px'
      >
        {startships.map(ship => (
          <Box
            key={ship.url}
            m='10px'
          >
            <CardView
              {...ship}
              stops={calculateStops(distance, ship)}
            />
          </Box>
        ))}
      </Flex>
      <Box
        m='10px'
      >
        {loadMore && !loading && (
          <Button
            onClick={() => setPage(p => p + 1)}
          >
            Show More
          </Button>
        )}
        {loading && <Loader />}
      </Box>
    </>
  )
}

StarshipList.propTypes = {
  distance: PropTypes.string.isRequired
}

export default StarshipList
