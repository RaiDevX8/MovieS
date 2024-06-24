import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { useSelector } from 'react-redux'
import './Style.scss' // Ensure SCSS file is correctly imported

const Detail = () => {
  const { mediaType, id } = useParams()
  const { data, loading, error } = useFetch(`/${mediaType}/${id}`)  
  const { url } = useSelector(state => state.home)

  useEffect(() => {
    if (error) {
      console.error('Error fetching data:', error)
    }
  }, [error])

  if (loading) return <div>Loading...</div>

  return (
    <div className="detail-page">
      <section
        className="background-section"
        style={{ backgroundImage: `url(${url?.poster + data?.backdrop_path})` }}
      >
        <div className="overlay"></div>
      </section>
      <section className="content-section">
        <div className="poster">
          <img
            src={url?.poster + data?.poster_path}
            alt={data?.title || data?.name}
          />
        </div>
        <div className="details">
          <h1>
            {data?.title || data?.name}{' '}
            <span>
              (
              {new Date(
                data?.release_date || data?.first_air_date
              ).getFullYear()}
              )
            </span>
          </h1>
          <div className="metadata">
            <p className="rating">{data?.adult ? 'R' : 'PG-13'}</p>
            <p className="date">
              {new Date(
                data?.release_date || data?.first_air_date
              ).toLocaleDateString()}
            </p>
            <p className="genre">
              {data?.genres.map(genre => genre.name).join(', ')}
            </p>
            <p className="duration">
              {Math.floor(data?.runtime / 60)}h {data?.runtime % 60}m
            </p>
          </div>
          <div className="score">
            <div className="circle">
              <span>{data?.vote_average * 10}%</span>
            </div>
            <p>User Score</p>
          </div>
          <button className="vibe-button">What's your Vibe?</button>
          <div className="icons">
            <span className="icon">📄</span>
            <span className="icon">❤️</span>
            <span className="icon">⭐</span>
            <span className="icon">▶️</span>
          </div>
          <p className="tagline">{data?.tagline || 'Vengeance becomes her.'}</p>
          <div className="overview">
            <h2>Overview</h2>
            <p>{data?.overview}</p>
          </div>
          <div className="crew">
            {data?.credits?.crew?.map(member => (
              <div className="member" key={member.credit_id}>
                <p className="role">{member.job}</p>
                <p className="name">{member.name}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}

export default Detail
