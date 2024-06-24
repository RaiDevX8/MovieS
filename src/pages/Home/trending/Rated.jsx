import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import Carousel from '../../../components/carousel/Carousel'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabb/SwitchTab'
import useFetch from '../../../hooks/useFetch'

const Rated = ({ type }) => {
  const [endpoint, setEndpoint] = useState('day')

  const { data, loading } = useFetch(`/${type}/top_rated`)
  const onTabChange = tab => {
    setEndpoint(tab === 'Day' ? 'day' : 'week')

  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTab data={['Day', 'Week']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel type={type} data={data?.results} loading={loading} />

    </div>
  )
}

export default Rated
