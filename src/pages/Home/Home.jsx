import React from 'react'
import './Style.scss'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'

import './Style.scss'
import Rated from './trending/Rated'
const Home = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <Trending type={`tv`} />
      <Trending type={`movie`} />
      <Rated type={'tv'} />
      <Rated type={'movie'} />
    </div>
  )
}

export default Home
