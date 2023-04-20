import React from 'react'
import Landing from '../components/Landing'
import Popular from '../components/Popular'

const Upcoming = () => {
  return (
    <div>
        <Landing/>
        <Popular title={'Upcoming Movies'} url={ `https://api.themoviedb.org/3/movie/upcoming?api_key=b1ae0eee69d0da84f5106587befce2d0&language=en-US`}/>
    </div>
  )
}

export default Upcoming