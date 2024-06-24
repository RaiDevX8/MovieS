import React, { useState } from 'react'

import useFetch from '../../../hooks/useFetch'
import SwitchTab from '../../../components/switchTabb/SwitchTab'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Carousel from '../../../components/carousel/Carousel'
import { Link } from 'react-router-dom'

const Trending = ({ type }) => {
  const [endpoint, setEndpoint] = useState('day')

  const { data, loading } = useFetch(`/trending/${type}/${endpoint}`)

  const onTabChange = tab => {
    setEndpoint(tab === 'Day' ? 'day' : 'week')
  }
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending </span>
        <SwitchTab data={['Day', 'Week']} onTabChange={onTabChange} />
      </ContentWrapper>
        <Carousel type={type} data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending
