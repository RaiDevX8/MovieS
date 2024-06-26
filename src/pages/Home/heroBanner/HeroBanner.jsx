import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Img from '../../../components/lazyLoading/Img.jsx'
import useFetch from '../../../hooks/useFetch'
import './Style.scss'
const HeroBanner = () => {
  const [background, setBackground] = useState('')
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { url } = useSelector(state => state.home)
  const { data, loading } = useFetch('/movie/upcoming')

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg)
  }, [data])

  const searchqueryHandler = e => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className="herobanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <ContentWrapper>
        <div className="opacity-layer"></div>
        <div className="wrapper">
          <div className="herobanner-content">
            <span className="title">Welcome</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="search-input">
              <input
                type="text"
                placeholder="Search for movie or TV show..."
                onChange={e => setQuery(e.target.value)}
                onKeyUp={searchqueryHandler}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner
