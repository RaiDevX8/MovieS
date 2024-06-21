import React from 'react'
import "./Style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import './Style.scss'
const Home = () => {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Trending/>
    </div>
  )
}

export default Home
