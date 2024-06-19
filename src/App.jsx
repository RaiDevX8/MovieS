import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiconfig } from './store/slice/HomeSlice'
import { fetchDataFromApi } from './utils/api'

const App = () => {
  const dispatch = useDispatch()
  const { url } = useSelector(state => state.home)
  const [data, setData] = useState([]) // Correct placement of useState

  useEffect(() => {
    const apitesting = () => {
      fetchDataFromApi('/movie/popular').then(res => {
        console.log(res)
        dispatch(getApiconfig(res))
        setData(res.results)
      })
    }

    apitesting()
  }, [dispatch])
  const imageUrl = 'https://image.tmdb.org/t/p/w500'
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <p key={index}>{item.title}</p>
          <img src={`${imageUrl}${item.poster_path}`} alt="" />
        </div>
      ))}
    </>
  )
}

export default App
